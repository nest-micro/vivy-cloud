import * as path from 'path'
import { NestFactory } from '@nestjs/core'
import { Config } from '@nest-micro/config'
import { LoggerModule } from '@vivy-cloud/common-logger'
import { SwaggerService } from '@vivy-cloud/common-swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = app.get(Config)
  const name = config.get<string>('application.name')
  const port = config.get<number>('application.port')

  app.useLogger(
    LoggerModule.NestLogger({
      logPath: path.resolve(__dirname, '../logs'),
      appName: name,
    })
  )

  const swagger = new SwaggerService(app, {})
  swagger.setup()

  await app.listen(port, () => {
    console.log(`\n\n${name} run at http://localhost:${port}/\n\n`)
  })
}
bootstrap()
