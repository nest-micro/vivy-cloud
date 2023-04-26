import * as path from 'path'
import { Module } from '@nestjs/common'
import { CONFIG, CONFIG_NACOS } from '@nest-micro/common'
import { Config } from '@nest-micro/config'
import { ProxyModule } from '@nest-micro/proxy'
import { CoreModule } from '@vivy-cloud/common-core'
import { TypeORMLogger } from '@vivy-cloud/common-logger'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ProxyFilters } from './filters'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GatewayModule } from './modules/gateway/gateway.module'

@Module({
  imports: [
    CoreModule.forRoot({
      dirname: __dirname,
    }),
    ProxyModule.forRootAsync({
      dependencies: [CONFIG, CONFIG_NACOS],
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
      inject: [CONFIG, CONFIG_NACOS],
    }),

    GatewayModule,
  ],
  controllers: [AppController],
  providers: [...ProxyFilters, AppService],
})
export class AppModule {}
