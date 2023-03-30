import * as path from 'path'
import { isArray, isObject } from 'lodash'
import { Module } from '@nestjs/common'
import { IpUtils } from '@vivycloud/common-core'
import { ConfigModule, ConfigService } from '@vivycloud/config'
import { NacosConfigModule, NacosConfigOptions, NacosNamingModule, NacosNamingOptions } from '@vivycloud/config-nacos'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      dir: path.resolve(__dirname, '../config'),
    }),
    NacosConfigModule.forRootAsync({
      useFactory(configService: ConfigService) {
        const config = configService.get<NacosConfigOptions>('nacos.config')
        return config
      },
      inject: [ConfigService],
    }),
    NacosNamingModule.forRootAsync({
      async useFactory(configService: ConfigService) {
        const ip = await IpUtils.internalIpV4()
        const naming = configService.get<NacosNamingOptions>('nacos.naming')
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
  providers: [AppService],
})
export class AppModule {}
