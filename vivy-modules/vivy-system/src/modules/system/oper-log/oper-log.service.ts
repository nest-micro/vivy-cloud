import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { paginate, Pagination } from 'nestjs-typeorm-paginate'
import { SysOperLog } from '@/entities/sys-oper-log.entity'
import { SearchOperLogDto, CreateOperLogDto } from './dto/oper-log.dto'

@Injectable()
export class OperLogService {
  constructor(
    @InjectRepository(SysOperLog)
    private operLogRepository: Repository<SysOperLog>
  ) {}

  /**
   * 查询操作日志列表
   * @author vivy
   * @date 2023-04-27 20:33:05
   */
  async list(operLog: SearchOperLogDto): Promise<Pagination<SysOperLog>> {
    return paginate<SysOperLog>(this.operLogRepository, {
      page: operLog.page,
      limit: operLog.limit,
    })
  }

  /**
   * 添加操作日志
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async add(operLog: CreateOperLogDto): Promise<void> {
    await this.operLogRepository.insert(operLog)
  }

  /**
   * 清空操作日志
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async clear(): Promise<void> {
    await this.operLogRepository.clear()
  }
}
