import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3030, () => {
    console.log(`\n\n${'vivy-gen'} run at http://localhost:${3030}/\n\n`)
  })
}
bootstrap()
