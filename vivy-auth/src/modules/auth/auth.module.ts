import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { LoginLogService } from '../services/login-log.service'
import { RemoteLogService } from '../services/remote-log.service'
import { RemoteUserService } from '../services/remote-user.service'

@Module({
  controllers: [AuthController],
  providers: [AuthService, LoginLogService, RemoteLogService, RemoteUserService],
})
export class AuthModule {}
