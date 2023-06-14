import { Injectable } from '@nestjs/common'
import { IpUtils, RequestContextService } from '@vivy-cloud/common-core'
import { LoginType, OperStatus } from '@vivy-cloud/common-logger'
import { RpcLogService } from './rpc-log.service'
import { LoginLogDto } from './dto/login-log.dto'

@Injectable()
export class LoginLogService {
  constructor(private rpcLogService: RpcLogService, private requestContextService: RequestContextService) {}

  /**
   * 登录失败
   * @param type 登录类型
   * @param name 用户名称
   * @param message 登录消息
   */
  async error(type: LoginType, name: string, message: string) {
    this.saveLoginLog(type, name, OperStatus.FAIL, message)
  }

  /**
   * 登录成功
   * @param type 登录类型
   * @param name 用户名称
   * @param message 登录消息
   */
  async success(type: LoginType, name: string, message: string) {
    this.saveLoginLog(type, name, OperStatus.SUCCESS, message)
  }

  /**
   * 登录日志保存
   * @param type 登录类型
   * @param name 用户名称
   * @param status 登录状态
   * @param message 登录消息
   */
  private saveLoginLog(type: LoginType, name: string, status: OperStatus, message: string) {
    const loginLog = new LoginLogDto()
    loginLog.loginName = name
    loginLog.loginType = type
    loginLog.loginStatus = status
    loginLog.loginMessage = message

    const request = this.requestContextService.getRequest()
    loginLog.loginIp = IpUtils.requestIp(request)
    const region = IpUtils.ip2Region(IpUtils.requestIp(request))
    loginLog.loginLocation = `${region.country} ${region.province} ${region.city}`
    loginLog.userAgent = request.headers['user-agent']

    this.rpcLogService.saveLoginLog(loginLog).catch(() => {
      // Do not handle errors
    })
  }
}
