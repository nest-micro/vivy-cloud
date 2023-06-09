import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { paginate, Pagination } from 'nestjs-typeorm-paginate'
import { SysDictType } from '@/entities/sys-dict-type.entity'
import { ListDictTypeDto, CreateDictTypeDto, UpdateDictTypeDto } from './dto/dict-type.dto'

/**
 * 字典类型管理
 * @author vivy
 */
@Injectable()
export class DictTypeService {
  constructor(
    @InjectRepository(SysDictType)
    private dictTypeRepository: Repository<SysDictType>
  ) {}

  /**
   * 查询字典类型列表
   * @param dictType 字典类型信息
   * @returns 字典类型列表
   */
  async list(dictType: ListDictTypeDto): Promise<Pagination<SysDictType>> {
    return paginate<SysDictType>(
      this.dictTypeRepository,
      {
        page: dictType.page,
        limit: dictType.limit,
      },
      {
        order: {
          dictSort: 'ASC',
        },
      }
    )
  }

  /**
   * 添加字典类型
   * @param dictType 字典类型信息
   */
  async add(dictType: CreateDictTypeDto): Promise<void> {
    await this.dictTypeRepository.insert(dictType)
  }

  /**
   * 更新字典类型
   * @param dictType 字典类型信息
   */
  async update(dictType: UpdateDictTypeDto): Promise<void> {
    await this.dictTypeRepository.update(dictType.dictId, dictType)
  }
}
