import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Log, BusinessType } from '@vivy-cloud/common-logger'
import { OperLogService } from './oper-log.service'
import { CreateOperLogDto } from './oper-log.dto'

@ApiTags('操作日志')
@Controller('oper-log')
export class OperLogController {
  constructor(private readonly operLogService: OperLogService) {}

  /**
   * 添加操作日志
   */
  @Log('操作日志', BusinessType.INSERT)
  @Post('add')
  async add(@Body() operLog: CreateOperLogDto) {
    await this.operLogService.add(operLog)
  }

  /**
   * 清空操作日志
   */
  @Log('操作日志', BusinessType.CLEAN)
  @Post('clear')
  async clear() {
    await this.operLogService.clear()
  }
}
