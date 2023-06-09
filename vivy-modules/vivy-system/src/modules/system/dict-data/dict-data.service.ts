import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { paginate, Pagination } from 'nestjs-typeorm-paginate'
import { SysDictData } from '@/entities/sys-dict-data.entity'
import { ListDictDataDto, CreateDictDataDto, UpdateDictDataDto } from './dto/dict-data.dto'

/**
 * 字典数据管理
 * @author vivy
 */
@Injectable()
export class DictDataService {
  constructor(
    @InjectRepository(SysDictData)
    private dictDataRepository: Repository<SysDictData>
  ) {}

  /**
   * 查询字典数据列表
   * @author vivy
   * @param dictData 字典数据信息
   * @returns 字典数据列表
   */
  async list(dictData: ListDictDataDto): Promise<Pagination<SysDictData>> {
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
   * @param dictData 字典数据信息
   */
  async add(dictData: CreateDictDataDto): Promise<void> {
    await this.dictDataRepository.insert(dictData)
  }

  /**
   * 更新字典数据
   * @param dictData 字典数据信息
   */
  async update(dictData: UpdateDictDataDto): Promise<void> {
    await this.dictDataRepository.update(dictData.dictId, dictData)
  }

  /**
   * 根据字典类型查询字典数据选项列表
   * @param dictType 字典类型
   * @returns 字典数据选项列表
   */
  optionsByType(dictType: string): Promise<SysDictData[]> {
    return this.dictDataRepository.find({
      where: {
        dictType,
      },
    })
  }
}
