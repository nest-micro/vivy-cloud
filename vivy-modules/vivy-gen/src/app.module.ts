import { Module } from '@nestjs/common'
import { CONFIG, CONFIG_NACOS } from '@nest-micro/common'
import { Config } from '@nest-micro/config'
import { CoreModule } from '@vivy-cloud/common-core'
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
        const options = config.get<TypeOrmModuleOptions>('mysql.defalut', {})
        return options
      },
      inject: [CONFIG, CONFIG_NACOS],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
