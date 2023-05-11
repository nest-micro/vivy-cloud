import { Module } from '@nestjs/common'
import { SystemModule } from '../system/system.module'
import { RemoteLogController } from './remote-log.controller'
import { RemoteUserController } from './remote-user.controller'

@Module({
  imports: [SystemModule],
  controllers: [RemoteLogController, RemoteUserController],
})
export class RemoteModule {}
