import { Controller, Delete, Get, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, OperType } from '@vivy-cloud/common-logger'
import { RequirePermissions } from '@vivy-cloud/common-security'
import { LoginLogService } from './login-log.service'
import { ListLoginLogDto } from './dto/login-log.dto'

/**
 * 登录日志
 * @author vivy
 */
@ApiTags('登录日志')
@Controller('login/log')
export class LoginLogController {
  constructor(private loginLogService: LoginLogService) {}

  /**
   * 查询登录日志列表
   * @param loginLog 登录日志信息
   * @returns 登录日志列表
   */
  @Get('list')
  @RequirePermissions(['system:loginlog:query'])
  async list(@Query() loginLog: ListLoginLogDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.loginLogService.list(loginLog))
  }

  /**
   * 清空登录日志
   */
  @Log('登录日志', OperType.CLEAN)
  @Delete('clear')
  @RequirePermissions(['system:loginlog:remove'])
  async clear(): Promise<AjaxResult> {
    return AjaxResult.success(await this.loginLogService.clear())
  }
}
