import { isEmpty } from 'lodash'
import { Injectable } from '@nestjs/common'
import { ISysLoginUser, ServiceException, PasswordUtils, UserStatusEnums } from '@vivy-cloud/common-core'
import { RemoteUserService } from '../services/remote-user.service'

@Injectable()
export class AuthService {
  constructor(private remoteUserService: RemoteUserService) {}

  /**
   * 用户登录
   * @author vivy
   * @date 2023-05-03 19:13:49
   */
  async login(username: string, password: string): Promise<ISysLoginUser> {
    if (isEmpty(username) || isEmpty(password)) {
      throw new ServiceException('用户/密码必须填写')
    }

    const userResult = await this.remoteUserService.getUserInfo(username)
    if (isEmpty(userResult) || isEmpty(userResult.data)) {
      throw new ServiceException('登录用户：' + username + ' 不存在')
    }

    const data = userResult.data
    const user = userResult.data.sysUser

    if (UserStatusEnums.DELETED === user.delFlag) {
      throw new ServiceException('您的账号：' + username + ' 已删除')
    }

    if (UserStatusEnums.DISABLE === user.status) {
      throw new ServiceException('您的账号：' + username + ' 已停用')
    }

    if (!PasswordUtils.compare(password, user.password)) {
      throw new ServiceException('密码输入错误')
    }

    return data
  }

  /**
   * 用户退出
   * @author vivy
   * @date 2023-05-03 19:13:49
   */
  async logout() {
    throw new Error('Method not implemented.')
  }

  /**
   * 刷新 Token
   * @author vivy
   * @date 2023-05-03 19:13:49
   */
  async refresh() {
    throw new Error('Method not implemented.')
  }
}
