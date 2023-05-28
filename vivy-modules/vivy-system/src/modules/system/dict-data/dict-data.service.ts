import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { paginate, Pagination } from 'nestjs-typeorm-paginate'
import { SysDictData } from '@/entities/sys-dict-data.entity'
import { SearchDictDataDto, CreateDictDataDto, UpdateDictDataDto } from './dto/dict-data.dto'

@Injectable()
export class DictDataService {
  constructor(
    @InjectRepository(SysDictData)
    private dictDataRepository: Repository<SysDictData>
  ) {}

  /**
   * 查询字典数据列表
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  async list(dictData: SearchDictDataDto): Promise<Pagination<SysDictData>> {
    return paginate<SysDictData>(
      this.dictDataRepository,
      {
        page: dictData.page,
        limit: dictData.limit,
      },
      {
        order: {
          dictSort: 'ASC',
        },
        where: {
          dictType: dictData.dictType,
        },
      }
    )
  }

  /**
   * 添加字典数据
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async add(dictData: CreateDictDataDto): Promise<void> {
    await this.dictDataRepository.insert(dictData)
  }

  /**
   * 更新字典数据
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async update(dictData: UpdateDictDataDto): Promise<void> {
    await this.dictDataRepository.update(dictData.dictId, dictData)
  }

  /**
   * 根据字典类型查询字典数据列表
   * @author vivy
   * @date 2023-05-27 18:33:27
   */
  optionByType(dictType: string): Promise<SysDictData[]> {
    return this.dictDataRepository.find({
      select: ['dictId', 'dictLabel', 'dictValue', 'cssClass', 'listClass'],
      where: {
        dictType,
      },
    })
  }
}
