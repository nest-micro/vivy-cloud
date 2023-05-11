import { Injectable, HttpStatus } from '@nestjs/common'
import { ProxyFilter, RegisterFilter } from '@nest-micro/proxy'
import { AjaxResult } from '@vivy-cloud/common-core'
import { LoggerService } from '@vivy-cloud/common-logger'
import { Request, Response } from 'express'

/**
 * 网关错误
 */
@Injectable()
@RegisterFilter()
export class ProxyErrorFilter implements ProxyFilter {
  public order = -100
  public global = true

  constructor(private logger: LoggerService) {}

  error(err: Error, request: Request, response: Response) {
    this.logger.error(err.message, err.stack, ProxyErrorFilter.name)
    response
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json(AjaxResult.error(HttpStatus.INTERNAL_SERVER_ERROR, '服务异常，请稍后再试'))
  }
}
