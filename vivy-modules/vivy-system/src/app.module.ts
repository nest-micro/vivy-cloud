import * as path from 'path'
import { isArray, isObject } from 'lodash'
import { Module } from '@nestjs/common'
import { IpUtils } from '@vivycloud/common-core'
import { ConfigModule, ConfigService } from '@vivycloud/config'
import { NacosConfigModule, NacosNamingModule } from '@vivycloud/config-nacos'
import { LogInterceptorProvide } from '@vivycloud/common-logger'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      dir: path.resolve(__dirname, '../config'),
    }),
    NacosConfigModule.forRootAsync({
      useFactory(configService: ConfigService) {
        const config = configService.get<any>('nacos.config')
        return config
      },
      inject: [ConfigService],
    }),
    NacosNamingModule.forRootAsync({
      async useFactory(configService: ConfigService) {
        const ip = await IpUtils.internalIpV4()
        const naming = configService.get<any>('nacos.naming')
        if (isArray(naming.instance)) {
          naming.instance.forEach((ins) => (ins.ip = ip))
        } else if (isObject(naming.instance)) {
          naming.instance.ip = ip
        }
        return naming
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, LogInterceptorProvide],
})
export class AppModule {}
