import { NestFactory } from '@nestjs/core'
import { Config } from '@nest-micro/config'
import { LoggerService } from '@vivy-cloud/common-logger'
import { SwaggerService } from '@vivy-cloud/common-swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = app.get(Config)
  const name = config.get<string>('application.name')
  const port = config.get<number>('application.port')

  app.useLogger(app.get(LoggerService))

  const swagger = new SwaggerService(app, config.get('swagger'))
  swagger.setup()

  await app.listen(port, () => {
    console.log(`\n\n${name} run at http://localhost:${port}/\n\n`)
  })
}
bootstrap()
