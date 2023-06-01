import { Body, Controller, Get, Post, Req } from '@nestjs/common'
import { AjaxResult } from '@vivy-cloud/common-core'
import { TokenService } from '@vivy-cloud/common-security'
import { LoginType } from '@vivy-cloud/common-logger'
import { Request } from 'express'
import { AuthService } from './auth.service'
import { LoginInfoDto } from './dto/login.dto'
import { LoginLogService } from '../services/login-log.service'

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private loginLogService: LoginLogService
  ) {}

  /**
   * 用户登录
   * @author vivy
   * @date 2023-05-03 19:13:49
   */
  @Post('login')
  async login(@Body() form: LoginInfoDto): Promise<AjaxResult> {
    try {
      const user = await this.authService.login(form.username, form.password)
      const token = await this.tokenService.createToken(user)
      this.loginLogService.success(LoginType.ACCOUNT_PASSWORD, form.username, '登录成功')
      return AjaxResult.success(token, '登录成功')
    } catch (error) {
      this.loginLogService.error(LoginType.ACCOUNT_PASSWORD, form.username, error?.message)
      throw error
    }
  }

  /**
   * 用户退出
   * @author vivy
   * @date 2023-05-03 19:13:49
   */
  @Post('logout')
  async logout(@Req() req: Request): Promise<AjaxResult> {
    const token = this.tokenService.getToken(req)
    if (token) {
      await this.tokenService.delLoginUser(token)
    }
    return AjaxResult.success(null, '退出成功')
  }

  /**
   * 刷新 Token
   * @author vivy
   * @date 2023-05-03 19:13:49
   */
  @Post('refresh')
  async refresh(@Req() req: Request): Promise<AjaxResult> {
    const token = this.tokenService.getToken(req)
    if (token) {
      const loginUser = await this.tokenService.getLoginUser(token)
      if (loginUser) {
        await this.tokenService.refreshToken(loginUser)
      }
    }
    return AjaxResult.success(null, '刷新成功')
  }

  /**
   * 根据 Token 获取缓存的用户信息
   * @author vivy
   * @date 2023-05-24 18:40:52
   */
  @Get('getLoginUserInfo')
  async getLoginUserInfo(@Req() req: Request): Promise<AjaxResult> {
    const token = this.tokenService.getToken(req)
    const loginUser = await this.tokenService.getLoginUser(token)
    return AjaxResult.success(loginUser)
  }
}
