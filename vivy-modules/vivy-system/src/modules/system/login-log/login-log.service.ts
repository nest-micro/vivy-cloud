import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { paginate, Pagination } from 'nestjs-typeorm-paginate'
import { SysLoginLog } from '@/entities/sys-login-log.entity'
import { ListLoginLogDto, CreateLoginLogDto } from './dto/login-log.dto'

/**
 * 登录日志
 * @author vivy
 */
@Injectable()
export class LoginLogService {
  constructor(
    @InjectRepository(SysLoginLog)
    private loginLogRepository: Repository<SysLoginLog>
  ) {}

  /**
   * 查询登录日志列表
   * @param loginLog 登录日志信息
   * @returns 登录日志列表
   */
  async list(loginLog: ListLoginLogDto): Promise<Pagination<SysLoginLog>> {
    return paginate<SysLoginLog>(this.loginLogRepository, {
      page: loginLog.page,
      limit: loginLog.limit,
    })
  }

  /**
   * 添加登录日志
   * @param loginLog 登录日志信息
   */
  async add(loginLog: CreateLoginLogDto): Promise<void> {
    await this.loginLogRepository.insert(loginLog)
  }

  /**
   * 清空登录日志
   */
  async clear(): Promise<void> {
    await this.loginLogRepository.clear()
  }
}
