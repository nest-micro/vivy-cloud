import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, BusinessType } from '@vivy-cloud/common-logger'
import { OperLogService } from './oper-log.service'
import { SearchOperLogDto, CreateOperLogDto } from './dto/oper-log.dto'

@ApiTags('操作日志')
@Controller('oper/log')
export class OperLogController {
  constructor(private operLogService: OperLogService) {}

  /**
   * 查询操作日志列表
   * @author vivy
   * @date 2023-04-27 20:33:05
   */
  @Get('list')
  async list(@Query() operLog: SearchOperLogDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.operLogService.list(operLog))
  }

  /**
   * 添加操作日志
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  @Log('操作日志', BusinessType.INSERT)
  @Post('add')
  async add(@Body() operLog: CreateOperLogDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.operLogService.add(operLog))
  }

  /**
   * 清空操作日志
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  @Log('操作日志', BusinessType.CLEAN)
  @Post('clear')
  async clear(): Promise<AjaxResult> {
    return AjaxResult.success(await this.operLogService.clear())
  }
}
