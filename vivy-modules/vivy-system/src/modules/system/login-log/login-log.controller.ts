import { Controller } from '@nestjs/common'
import { LoginLogService } from './login-log.service'

@Controller('login/log')
export class LoginLogController {
  constructor(private readonly loginLogService: LoginLogService) {}
}
