import * as path from 'path'
import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@vivycloud/config'
import { SwaggerService } from '@vivycloud/common-swagger'
import { NestLogger } from '@vivycloud/common-logger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(ConfigService)
  const name = configService.get<string>('application.name')
  const port = configService.get<number>('application.port')

  app.useLogger(
    NestLogger({
      appName: name,
      logPath: path.resolve(__dirname, '../logs'),
    })
  )

  const swaggerService = new SwaggerService(app, {})
  swaggerService.setup()

  await app.listen(port, () => {
    console.log(`\n\n${name} run at http://localhost:${port}/\n\n`)
  })
}
bootstrap()
