import { Injectable, Logger } from '@nestjs/common'

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name)

  getHello(params: any) {
    this.logger.log('Hello World!')
    this.logger.warn('Hello World!')
    this.logger.debug('Hello World!')
    this.logger.error('Hello World!')
    this.logger.verbose('Hello World!')
    return params
  }
}
