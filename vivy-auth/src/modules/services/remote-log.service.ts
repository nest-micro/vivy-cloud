/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common'
import { Body, Post, SetHeader } from '@nest-micro/http'
import { Loadbalanced } from '@nest-micro/loadbalance'
import { ServiceNameEnums } from '@vivy-cloud/common-core/lib/enums'
import { SecurityConstants } from '@vivy-cloud/common-core/lib/constants'
import { LoginLogDto } from './dto/login-log.dto'

/**
 * 远程日志服务
 */
@Injectable()
@Loadbalanced(ServiceNameEnums.SYSTEM_SERVICE)
export class RemoteLogService {
  /**
   * 添加登录日志
   * @author vivy
   * @date 2023-05-11 21:18:42
   */
  @Post('remote/log/saveLoginLog')
  @SetHeader(SecurityConstants.FROM_SOURCE, SecurityConstants.SOURCE_INNER)
  async saveLoginLog(@Body() loginLog: LoginLogDto) {}
}
