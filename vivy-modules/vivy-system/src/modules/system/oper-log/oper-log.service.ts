import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { paginate, Pagination } from 'nestjs-typeorm-paginate'
import { SysOperLog } from '@/entities/sys-oper-log.entity'
import { ListOperLogDto, CreateOperLogDto } from './dto/oper-log.dto'

/**
 * 操作日志
 * @author vivy
 */
@Injectable()
export class OperLogService {
  constructor(
    @InjectRepository(SysOperLog)
    private operLogRepository: Repository<SysOperLog>
  ) {}

  /**
   * 操作日志列表
   * @param operLog 操作日志信息
   * @returns 操作日志列表
   */
  async list(operLog: ListOperLogDto): Promise<Pagination<SysOperLog>> {
    return paginate<SysOperLog>(this.operLogRepository, {
      page: operLog.page,
      limit: operLog.limit,
    })
  }

  /**
   * 添加操作日志
   * @param operLog 操作日志信息
   */
  async add(operLog: CreateOperLogDto): Promise<void> {
    await this.operLogRepository.insert(operLog)
  }

  /**
   * 清空操作日志
   */
  async clear(): Promise<void> {
    await this.operLogRepository.clear()
  }
}
