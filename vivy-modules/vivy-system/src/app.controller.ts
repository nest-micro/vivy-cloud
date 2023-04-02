import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { Log, BusinessType } from '@vivycloud/common-logger'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Log('查询首页', BusinessType.SELECT)
  getHello(@Query() query: any) {
    return this.appService.getHello(query)
  }

  @Post()
  @Log('提交首页', BusinessType.UPDATE)
  getHello2(@Body() body: any) {
    return this.appService.getHello(body)
  }
}
