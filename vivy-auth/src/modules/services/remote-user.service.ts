/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
// @ts-nocheck
import { Injectable } from '@nestjs/common'
import { Get, Query, ResponseBody } from '@nest-micro/http'
import { Loadbalanced } from '@nest-micro/loadbalance'
import { ServiceNameEnums, ISysLoginUser, AjaxResult } from '@vivy-cloud/common-core'

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
  @Get('remote/user/getUserInfo')
  @ResponseBody()
  async getUserInfo(@Query('username') username: string): Promise<AjaxResult<ISysLoginUser>> {}
}
