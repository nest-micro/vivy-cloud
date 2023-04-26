import * as path from 'path'
import { Module } from '@nestjs/common'
import { CONFIG, CONFIG_NACOS } from '@nest-micro/common'
import { Config } from '@nest-micro/config'
import { CoreModule } from '@vivy-cloud/common-core'
import { TypeORMLogger } from '@vivy-cloud/common-logger'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    CoreModule.forRoot({
      dirname: __dirname,
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
