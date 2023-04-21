import * as path from 'path'
import { Module, ValidationPipe } from '@nestjs/common'
import { APP_PIPE } from '@nestjs/core'

import { CONFIG, CONFIG_NACOS } from '@nest-micro/common'
import { ConfigModule, Config } from '@nest-micro/config'
import { ConfigNacosModule } from '@nest-micro/config-nacos'
import { DiscoveryModule } from '@nest-micro/discovery'
import { DiscoveryNacosModule } from '@nest-micro/discovery-nacos'
import { LoadbalanceModule } from '@nest-micro/loadbalance'
import { BrakesModule } from '@nest-micro/brakes'
import { HttpModule } from '@nest-micro/http'
import { ProxyModule } from '@nest-micro/proxy'

import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { LoggerModule } from '@vivy-cloud/common-logger'
import { RemoteApiModule } from '@vivy-cloud/remote-api'

import { RemoteModule } from './modules/remote/remote.module'
import { SystemModule } from './modules/system/system.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      dir: path.resolve(__dirname, './config'),
    }),
    ConfigNacosModule.forRootAsync({
      dependencies: [CONFIG],
    }),
    DiscoveryModule.forRootAsync({
      dependencies: [CONFIG, CONFIG_NACOS],
    }),
    DiscoveryNacosModule.forRootAsync({
      dependencies: [CONFIG, CONFIG_NACOS],
    }),
    LoadbalanceModule.forRootAsync({
      dependencies: [CONFIG, CONFIG_NACOS],
    }),
    BrakesModule.forRootAsync({
      dependencies: [CONFIG, CONFIG_NACOS],
    }),
    HttpModule.forRootAsync({
      dependencies: [CONFIG, CONFIG_NACOS],
    }),
    ProxyModule.forRootAsync({
      dependencies: [CONFIG, CONFIG_NACOS],
    }),
    TypeOrmModule.forRootAsync({
      useFactory(config: Config) {
        const options = config.get<TypeOrmModuleOptions>('mysql.defalut', {})
        return options
      },
      inject: [CONFIG, CONFIG_NACOS],
    }),

    LoggerModule.forRoot(),
    RemoteApiModule.forRoot(),

    RemoteModule,
    SystemModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {}
