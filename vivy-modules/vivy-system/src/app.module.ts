import * as path from 'path'
import { Module } from '@nestjs/common'
import { CONFIG, NACOS_CONFIG } from '@nest-micro/common'
import { Config } from '@nest-micro/config'
import { CoreModule } from '@vivy-cloud/common-core'
import { SecurityModule } from '@vivy-cloud/common-security'
import { TypeORMLogger } from '@vivy-cloud/common-logger'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { RedisModule, RedisModuleOptions } from '@nestjs-modules/ioredis'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { RemoteModule } from './modules/remote/remote.module'
import { SystemModule } from './modules/system/system.module'

@Module({
  imports: [
    CoreModule.forRoot({
      dirname: __dirname,
    }),
    SecurityModule.forRoot({
      dirname: __dirname,
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

    RemoteModule,
    SystemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
