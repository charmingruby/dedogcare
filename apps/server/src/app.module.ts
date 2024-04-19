import { Module } from '@nestjs/common'
import { PrismaService } from './database/prisma/prisma.service'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env'

@Module({
  providers: [PrismaService],
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
