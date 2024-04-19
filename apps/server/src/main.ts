import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { Env } from './env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config: ConfigService<Env> = app.get(ConfigService)
  const port = config.get('PORT')

  await app.listen(port)
}
bootstrap()
