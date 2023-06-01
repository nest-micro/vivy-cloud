/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
// @ts-nocheck
import { Injectable } from '@nestjs/common'
import { Get, Param, SetHeader, ResponseBody } from '@nest-micro/http'
import { Loadbalanced } from '@nest-micro/loadbalance'
import { ServiceNameEnums, SysLoginUser, AjaxResult } from '@vivy-cloud/common-core'
import { SecurityConstants } from '@vivy-cloud/common-core/lib/constants'

/**
 * 远程用户服务
 */
@Injectable()
@Loadbalanced(ServiceNameEnums.SYSTEM_SERVICE)
export class RemoteUserService {
  /**
   * 根据用户名查询用户信息
   * @author vivy
   * @date 2023-05-07 19:11:06
   */
  @Get('remote/user/:username')
  @ResponseBody()
  @SetHeader(SecurityConstants.FROM_SOURCE, SecurityConstants.SOURCE_INNER)
  async getUserInfo(@Param('username') username: string): Promise<AjaxResult<SysLoginUser>> {}
}
