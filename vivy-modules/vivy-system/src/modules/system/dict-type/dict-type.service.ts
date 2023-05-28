import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { paginate, Pagination } from 'nestjs-typeorm-paginate'
import { SysDictType } from '@/entities/sys-dict-type.entity'
import { SearchDictTypeDto, CreateDictTypeDto, UpdateDictTypeDto } from './dto/dict-type.dto'

@Injectable()
export class DictTypeService {
  constructor(
    @InjectRepository(SysDictType)
    private dictTypeRepository: Repository<SysDictType>
  ) {}

  /**
   * 查询字典类型列表
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  async list(dictType: SearchDictTypeDto): Promise<Pagination<SysDictType>> {
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
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async add(dictType: CreateDictTypeDto): Promise<void> {
    await this.dictTypeRepository.insert(dictType)
  }

  /**
   * 更新字典类型
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async update(dictType: UpdateDictTypeDto): Promise<void> {
    await this.dictTypeRepository.update(dictType.dictId, dictType)
  }
}
