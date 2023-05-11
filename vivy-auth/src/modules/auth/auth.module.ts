import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { RemoteUserService } from '../services/remote-user.service'

@Module({
  controllers: [AuthController],
  providers: [AuthService, RemoteUserService],
})
export class AuthModule {}
