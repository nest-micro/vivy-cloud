import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000, () => {
    console.log(`\n\n${'vivy-gateway'} run at http://localhost:${3000}/\n\n`)
  })
}
bootstrap()
