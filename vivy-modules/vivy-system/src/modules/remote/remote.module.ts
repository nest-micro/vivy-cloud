import { Module } from '@nestjs/common'
import { SystemModule } from '../system/system.module'
import { RemoteLogController } from './remote-log.controller'

@Module({
  imports: [SystemModule],
  controllers: [RemoteLogController],
})
export class RemoteModule {}
