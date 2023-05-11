import { All, Controller, Param, Req, Res } from '@nestjs/common'
import { Proxy } from '@nest-micro/proxy'
import { Request, Response } from 'express'

@Controller(':service/**')
export class GatewayController {
  constructor(private proxy: Proxy) {}

  @All()
  async do(@Req() req: Request, @Res() res: Response, @Param('service') service: string) {
    await this.proxy.forward(req, res, service)
  }
}
