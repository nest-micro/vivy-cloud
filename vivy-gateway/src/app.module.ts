import { Module } from '@nestjs/common'
import { CONFIG, CONFIG_NACOS } from '@nest-micro/common'
import { Config } from '@nest-micro/config'
import { ProxyModule } from '@nest-micro/proxy'
import { CoreModule } from '@vivy-cloud/common-core'
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
        const options = config.get<TypeOrmModuleOptions>('datasource.defalut', {})
        return options
      },
      inject: [CONFIG, CONFIG_NACOS],
    }),

    GatewayModule,
  ],
  controllers: [AppController],
  providers: [...ProxyFilters, AppService],
})
export class AppModule {}
