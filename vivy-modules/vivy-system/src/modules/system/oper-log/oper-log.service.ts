import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { SysOperLog } from '@/entities/sys-oper-log.entity'
import { CreateOperLogDto } from './dto/create-oper-log.dto'

@Injectable()
export class OperLogService {
  constructor(
    @InjectRepository(SysOperLog)
    private operLogRepository: Repository<SysOperLog>
  ) {}

  /**
   * 添加操作日志
   */
  async add(operLog: CreateOperLogDto) {
    await this.operLogRepository.insert(operLog)
  }

  /**
   * 清空操作日志
   */
  async clear() {
    await this.operLogRepository.clear()
  }
}
