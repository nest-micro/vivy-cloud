import { LoginType, BusinessStatus } from '@vivy-cloud/common-logger'

export class LoginLogDto {
  /**
   * 用户账号
   */
  loginName: string

  /**
   * 登录类型(enum LoginType)
   */
  loginType: LoginType

  /**
   * 登录状态(enum BusinessStatus)
   */
  loginStatus: BusinessStatus

  /**
   * 主机地址
   */
  loginIp: string

  /**
   * 登录地点
   */
  loginLocation: string

  /**
   * 登录信息
   */
  loginMessage: string

  /**
   * 用户代理
   */
  userAgent: string
}
