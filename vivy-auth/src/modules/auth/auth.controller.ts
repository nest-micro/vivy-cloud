import { Body, Controller, Post, Req } from '@nestjs/common'
import { AjaxResult } from '@vivy-cloud/common-core'
import { TokenService } from '@vivy-cloud/common-security'
import { Request } from 'express'
import { AuthService } from './auth.service'
import { LoginInfoDto } from './dto/login.dto'

@Controller()
export class AuthController {
  constructor(private authService: AuthService, private tokenService: TokenService) {}

  /**
   * 用户登录
   * @author vivy
   * @date 2023-05-03 19:13:49
   */
  @Post('login')
  async login(@Body() form: LoginInfoDto): Promise<AjaxResult> {
    const user = await this.authService.login(form.username, form.password)
    const token = await this.tokenService.createToken(user)
    return AjaxResult.success(token)
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
    return AjaxResult.success()
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
    return AjaxResult.success()
  }
}
