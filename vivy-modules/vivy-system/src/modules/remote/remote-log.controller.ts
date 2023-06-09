import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { InnerAuth } from '@vivy-cloud/common-security'
import { OperLogService } from '../system/oper-log/oper-log.service'
import { LoginLogService } from '../system/login-log/login-log.service'
import { CreateOperLogDto } from '../system/oper-log/dto/oper-log.dto'
import { CreateLoginLogDto } from '../system/login-log/dto/login-log.dto'

/**
 * 远程服务-日志管理
 * @author vivy
 */
@ApiTags('远程服务-日志管理')
@Controller('remote/log')
export class RemoteLogController {
  constructor(private operLogService: OperLogService, private loginLogService: LoginLogService) {}

  /**
   * 添加操作日志
   * @param operLog 操作日志信息
   */
  @InnerAuth()
  @Post('saveOperLog')
  async saveOperLog(@Body() operLog: CreateOperLogDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.operLogService.add(operLog))
  }

  /**
   * 添加登录日志
   * @param loginLog 登录日志信息
   */
  @InnerAuth()
  @Post('saveLoginLog')
  async saveLoginLog(@Body() loginLog: CreateLoginLogDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.loginLogService.add(loginLog))
  }
}
