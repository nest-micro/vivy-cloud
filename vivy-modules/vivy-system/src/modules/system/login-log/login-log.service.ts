import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { paginate, Pagination } from 'nestjs-typeorm-paginate'
import { SysLoginLog } from '@/entities/sys-login-log.entity'
import { SearchLoginLogDto, CreateLoginLogDto } from './dto/login-log.dto'

@Injectable()
export class LoginLogService {
  constructor(
    @InjectRepository(SysLoginLog)
    private loginLogRepository: Repository<SysLoginLog>
  ) {}

  /**
   * 查询登录日志列表
   * @author vivy
   * @date 2023-04-27 20:33:05
   */
  async list(loginLog: SearchLoginLogDto): Promise<Pagination<SysLoginLog>> {
    return paginate<SysLoginLog>(this.loginLogRepository, {
      page: loginLog.page,
      limit: loginLog.limit,
    })
  }

  /**
   * 添加登录日志
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async add(loginLog: CreateLoginLogDto): Promise<void> {
    await this.loginLogRepository.insert(loginLog)
  }

  /**
   * 清空登录日志
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async clear(): Promise<void> {
    await this.loginLogRepository.clear()
  }
}
