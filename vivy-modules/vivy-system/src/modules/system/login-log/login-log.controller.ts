import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, OperType } from '@vivy-cloud/common-logger'
import { LoginLogService } from './login-log.service'
import { ListLoginLogDto, CreateLoginLogDto } from './dto/login-log.dto'

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
  async list(@Query() loginLog: ListLoginLogDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.loginLogService.list(loginLog))
  }

  /**
   * 添加登录日志
   * @param loginLog 登录日志信息
   */
  @Log('登录日志', OperType.INSERT)
  @Post('add')
  async add(@Body() loginLog: CreateLoginLogDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.loginLogService.add(loginLog))
  }

  /**
   * 清空登录日志
   */
  @Log('登录日志', OperType.CLEAN)
  @Delete('clear')
  async clear(): Promise<AjaxResult> {
    return AjaxResult.success(await this.loginLogService.clear())
  }
}
