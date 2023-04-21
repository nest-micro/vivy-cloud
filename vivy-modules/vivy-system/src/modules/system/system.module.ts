import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { SysOperLog } from '../../entities/sys-oper-log.entity'

// user
import { UserService } from './user/user.service'
import { UserController } from './user/user.controller'

// oper-log
import { OperLogService } from './oper-log/oper-log.service'
import { OperLogController } from './oper-log/oper-log.controller'

@Module({
  imports: [TypeOrmModule.forFeature([SysOperLog])],
  controllers: [UserController, OperLogController],
  providers: [UserService, OperLogService],
  exports: [OperLogService],
})
export class SystemModule {}
