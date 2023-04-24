import { Module } from '@nestjs/common'
import { CONFIG, CONFIG_NACOS } from '@nest-micro/common'
import { Config } from '@nest-micro/config'
import { CoreModule } from '@vivy-cloud/common-core'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { RemoteModule } from './modules/remote/remote.module'
import { SystemModule } from './modules/system/system.module'

@Module({
  imports: [
    CoreModule.forRoot({
      dirname: __dirname,
    }),
    TypeOrmModule.forRootAsync({
      useFactory(config: Config) {
        const options = config.get<TypeOrmModuleOptions>('datasource.defalut', {})
        return options
      },
      inject: [CONFIG, CONFIG_NACOS],
    }),

    RemoteModule,
    SystemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
