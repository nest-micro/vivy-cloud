import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@vivycloud/config'
import { SwaggerService } from '@vivycloud/common-swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)

  const swaggerService = new SwaggerService(app, {})
  swaggerService.setup()

  const port = configService.get<number>('application.port')
  const name = configService.get<string>('application.name')
  await app.listen(port, () => {
    console.log(`\n\n${name} run at http://localhost:${port}/\n\n`)
  })
}
bootstrap()
