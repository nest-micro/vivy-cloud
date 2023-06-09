import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { LoginLogService } from '../services/login-log.service'
import { RpcLogService } from '../services/rpc-log.service'
import { RpcUserService } from '../services/rpc-user.service'

@Module({
  controllers: [AuthController],
  providers: [AuthService, LoginLogService, RpcLogService, RpcUserService],
})
export class AuthModule {}
