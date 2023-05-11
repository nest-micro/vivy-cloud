import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, BusinessType } from '@vivy-cloud/common-logger'
import { LoginLogService } from './login-log.service'
import { SearchLoginLogDto, CreateLoginLogDto } from './dto/login-log.dto'

@ApiTags('登录日志')
@Controller('login/log')
export class LoginLogController {
  constructor(private loginLogService: LoginLogService) {}

  /**
   * 查询登录日志列表
   * @author vivy
   * @date 2023-04-27 20:33:05
   */
  @Get('list')
  async list(@Query() loginLog: SearchLoginLogDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.loginLogService.list(loginLog))
  }

  /**
   * 添加登录日志
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  @Log('登录日志', BusinessType.INSERT)
  @Post('add')
  async add(@Body() loginLog: CreateLoginLogDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.loginLogService.add(loginLog))
  }

  /**
   * 清空登录日志
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  @Log('登录日志', BusinessType.CLEAN)
  @Post('clear')
  async clear(): Promise<AjaxResult> {
    return AjaxResult.success(await this.loginLogService.clear())
  }
}
