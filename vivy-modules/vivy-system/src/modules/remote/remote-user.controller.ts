import { Controller, Get, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult, SysLoginUser } from '@vivy-cloud/common-core'
import { InnerAuth } from '@vivy-cloud/common-security'
import { isEmpty } from 'lodash'
import { UserService } from '../system/user/user.service'
import { PermissionService } from '../system/common/permission.service'

/**
 * 远程服务-用户信息
 * @author vivy
 */
@ApiTags('远程服务-用户信息')
@Controller('remote/user')
export class RemoteUserController {
  constructor(private userService: UserService, private permissionService: PermissionService) {}

  /**
   * 根据用户名查询用户信息
   * @param username 用户名称
   */
  @InnerAuth()
  @Get(':username')
  async getUserInfo(@Param('username') username: string): Promise<AjaxResult> {
    const sysUser = await this.userService.selectUserByUserName(username)
    if (isEmpty(sysUser)) {
      return AjaxResult.error('用户名错误')
    }

    const loginUser = new SysLoginUser()
    loginUser.sysUser = sysUser
    loginUser.roles = await this.permissionService.getRolePermission(sysUser.userId)
    loginUser.permissions = await this.permissionService.getMenuPermission(sysUser.userId)

    return AjaxResult.success(loginUser)
  }
}
