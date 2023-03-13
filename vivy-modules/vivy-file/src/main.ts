import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3020, () => {
    console.log(`\n\n${'vivy-file'} run at http://localhost:${3020}/\n\n`)
  })
}
bootstrap()
