import { isEmpty } from 'lodash'
import { Injectable } from '@nestjs/common'
import { SysLoginUser, ServiceException, PasswordUtils, UserStatusEnums } from '@vivy-cloud/common-core'
import { LoginInfoDto } from './dto/login.dto'
import { RpcUserService } from '../services/rpc-user.service'

/**
 * 认证管理
 * @author vivy
 */
@Injectable()
export class AuthService {
  constructor(private rpcUserService: RpcUserService) {}

  /**
   * 用户登录
   * @param form 登录账户信息
   */
  async login(form: LoginInfoDto): Promise<SysLoginUser> {
    const { username, password } = form
    if (isEmpty(username) || isEmpty(password)) {
      throw new ServiceException('用户/密码必须填写')
    }

    const userResult = await this.rpcUserService.getUserInfo(username)
    if (isEmpty(userResult) || isEmpty(userResult.data)) {
      throw new ServiceException('登录用户不存在')
    }

    const data = userResult.data
    const user = userResult.data.sysUser

    if (UserStatusEnums.DELETED === user.delFlag) {
      throw new ServiceException('您的账号已删除')
    }

    if (UserStatusEnums.DISABLE === user.status) {
      throw new ServiceException('您的账号已停用')
    }

    const isMatch = await PasswordUtils.compare(password, user.password)
    if (!isMatch) {
      throw new ServiceException('密码输入错误')
    }

    return data
  }

  /**
   * 用户退出
   */
  async logout() {
    throw new Error('Method not implemented.')
  }

  /**
   * 刷新 Token
   */
  async refresh() {
    throw new Error('Method not implemented.')
  }
}
