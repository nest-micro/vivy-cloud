import * as path from 'path'
import { Module } from '@nestjs/common'
import { CONFIG, NACOS_CONFIG } from '@nest-micro/common'
import { Config } from '@nest-micro/config'
import { ProxyModule } from '@nest-micro/proxy'
import { CoreModule } from '@vivy-cloud/common-core'
import { SecurityTokenModule } from '@vivy-cloud/common-security'
import { TypeORMLogger } from '@vivy-cloud/common-logger'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { RedisModule, RedisModuleOptions } from '@nestjs-modules/ioredis'
import { ProxyFilters } from './filters'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GatewayModule } from './modules/gateway/gateway.module'

@Module({
  imports: [
    CoreModule.forRoot({
      dirname: __dirname,
    }),
    SecurityTokenModule.forRoot({
      dirname: __dirname,
    }),
    ProxyModule.forRootAsync({
      dependencies: [CONFIG, NACOS_CONFIG],
    }),
    RedisModule.forRootAsync({
      useFactory(config: Config) {
        return {
          config: config.get<RedisModuleOptions['config']>('redis.defalut'),
        }
      },
      inject: [CONFIG, NACOS_CONFIG],
    }),
    TypeOrmModule.forRootAsync({
      useFactory(config: Config) {
        return {
          ...config.get<TypeOrmModuleOptions>('datasource.defalut'),
          logger: new TypeORMLogger({
            appName: config.get('application.name'),
            logPath: path.resolve(__dirname, '../logs'),
          }),
        }
      },
      inject: [CONFIG, NACOS_CONFIG],
    }),

    GatewayModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...ProxyFilters],
})
export class AppModule {}
