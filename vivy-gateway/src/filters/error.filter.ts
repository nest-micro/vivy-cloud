import { Injectable, HttpStatus } from '@nestjs/common'
import { ProxyFilter, RegisterFilter } from '@nest-micro/proxy'
import { LoggerService } from '@vivy-cloud/common-logger'
import { Request, Response } from 'express'

@Injectable()
@RegisterFilter()
export class ErrorFilter implements ProxyFilter {
  public global = true

  constructor(private logger: LoggerService) {}

  error(err: Error, request: Request, response: Response) {
    this.logger.error(err.message, err.stack, ErrorFilter.name)
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: err.message,
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    })
  }
}
