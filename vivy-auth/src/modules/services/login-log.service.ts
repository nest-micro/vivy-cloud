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
   * @author vivy
   * @date 2023-05-11 22:03:07
   */
  async error(type: LoginType, name: string, message: string) {
    this.saveLoginLog(type, name, OperStatus.FAIL, message)
  }

  /**
   * 用户成功
   * @author vivy
   * @date 2023-05-11 22:03:07
   */
  async success(type: LoginType, name: string, message: string) {
    this.saveLoginLog(type, name, OperStatus.SUCCESS, message)
  }

  /**
   * 登录日志保存
   * @author vivy
   * @date 2023-05-11 22:03:07
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
    loginLog.loginLocation = `${region.country} ${region.province} ${region.city} ${region.isp}`
    loginLog.userAgent = request.headers['user-agent']

    this.rpcLogService.saveLoginLog(loginLog).catch(() => {
      // Do not handle errors
    })
  }
}
