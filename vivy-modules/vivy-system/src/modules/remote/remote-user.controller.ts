import { Controller, Get, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult, SysLoginUser } from '@vivy-cloud/common-core'
import { InnerAuth } from '@vivy-cloud/common-security'
import { isEmpty } from 'lodash'
import { UserService } from '../system/user/user.service'

@ApiTags('远程服务-用户信息')
@Controller('remote/user')
export class RemoteUserController {
  constructor(private userService: UserService) {}

  /**
   * 根据用户名查询用户信息
   * @author vivy
   * @date 2023-05-07 19:11:06
   */
  @InnerAuth()
  @Get('getUserInfo')
  async getUserInfo(@Query('username') username: string): Promise<AjaxResult> {
    const sysUser = await this.userService.selectUserByUserName(username)
    if (isEmpty(sysUser)) {
      return AjaxResult.error('用户名错误')
    }

    const loginUser = new SysLoginUser()
    loginUser.sysUser = sysUser
    // loginUser.roles = ['admin']
    // loginUser.permissions = ['*:*:*']

    // loginUser.roles = ['test']
    // loginUser.permissions = ['x:y:z']

    return AjaxResult.success(loginUser)
  }
}
