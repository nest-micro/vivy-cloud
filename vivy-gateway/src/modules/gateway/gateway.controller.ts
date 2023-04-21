import { All, Controller, Param, Req, Res } from '@nestjs/common'
import { Proxy } from '@nest-micro/proxy'

@Controller(':service/**')
export class GatewayController {
  constructor(private readonly proxy: Proxy) {}

  @All()
  async do(@Req() req, @Res() res, @Param('service') service) {
    await this.proxy.forward(req, res, service)
  }
}
