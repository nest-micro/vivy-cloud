import { Request } from 'express'
import { isEmpty } from 'lodash'
import * as micromatch from 'micromatch'
import { Injectable } from '@nestjs/common'
import { Config } from '@nest-micro/config'
import { ProxyFilter, RegisterFilter } from '@nest-micro/proxy'
import { TokenService } from '@vivy-cloud/common-security'
import { SecurityConstants, NotLoginException } from '@vivy-cloud/common-core'

/**
 * 网关鉴权
 */
@Injectable()
@RegisterFilter()
export class ProxyAuthFilter implements ProxyFilter {
  public order = -200
  public global = true

  constructor(private config: Config, private tokenService: TokenService) {}

  async before(request: Request) {
    // 跳过不需要验证的路径
    const url = request.url
    const authWhites = this.config.get<string[]>('authWhites', [])
    if (micromatch.isMatch(url, authWhites)) {
      return true
    }

    const token = this.tokenService.getToken(request)
    if (isEmpty(token)) {
      throw new NotLoginException('令牌不能为空')
    }

    const claims = this.tokenService.parseToken(token)
    if (isEmpty(claims)) {
      throw new NotLoginException('令牌已过期或验证不正确')
    }

    const islogin = await this.tokenService.hasLoginUser(token)
    if (!islogin) {
      throw new NotLoginException('登录状态已过期')
    }

    // 设置用户信息到请求头
    request.headers[SecurityConstants.USER_SK] = claims[SecurityConstants.USER_SK]
    request.headers[SecurityConstants.USER_ID] = claims[SecurityConstants.USER_ID] as unknown as string
    request.headers[SecurityConstants.USER_NAME] = claims[SecurityConstants.USER_NAME]
    // 内部请求来源参数清除
    delete request.headers[SecurityConstants.FROM_SOURCE]
  }
}
