import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3040, () => {
    console.log(`\n\n${'vivy-system'} run at http://localhost:${3040}/\n\n`)
  })
}
bootstrap()
