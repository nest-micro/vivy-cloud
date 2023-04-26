import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { OperLogService } from '../system/oper-log/oper-log.service'
import { CreateOperLogDto } from '../system/oper-log/dto/create-oper-log.dto'

@ApiTags('远程日志')
@Controller('remote/log')
export class RemoteLogController {
  constructor(private readonly operLogService: OperLogService) {}

  /**
   * 添加操作日志
   * @date 2023-04-26 17:14:14
   * @author vivy
   */
  @Post('saveOperLog')
  async saveOperLog(@Body() operLog: CreateOperLogDto) {
    await this.operLogService.add(operLog)
  }
}
