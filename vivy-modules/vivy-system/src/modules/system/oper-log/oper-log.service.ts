import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { SysOperLog } from '../../../entities/sys-oper-log.entity'
import { CreateOperLogDto } from './oper-log.dto'

@Injectable()
export class OperLogService {
  constructor(
    @InjectRepository(SysOperLog)
    private operLogRepository: Repository<SysOperLog>
  ) {}

  async add(operLog: CreateOperLogDto) {
    return await this.operLogRepository.insert(operLog)
  }

  async clear() {
    return await this.operLogRepository.clear()
  }
}
