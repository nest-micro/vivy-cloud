import { Controller, Delete, Get, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, OperType } from '@vivy-cloud/common-logger'
import { OperLogService } from './oper-log.service'
import { ListOperLogDto } from './dto/oper-log.dto'

/**
 * 操作日志
 * @author vivy
 */
@ApiTags('操作日志')
@Controller('oper/log')
export class OperLogController {
  constructor(private operLogService: OperLogService) {}

  /**
   * 操作日志列表
   * @param operLog 操作日志信息
   * @returns 操作日志列表
   */
  @Get('list')
  async list(@Query() operLog: ListOperLogDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.operLogService.list(operLog))
  }

  /**
   * 清空操作日志
   */
  @Log('操作日志', OperType.CLEAN)
  @Delete('clear')
  async clear(): Promise<AjaxResult> {
    return AjaxResult.success(await this.operLogService.clear())
  }
}
