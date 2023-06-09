import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, OperType } from '@vivy-cloud/common-logger'
import { DictDataService } from './dict-data.service'
import { ListDictDataDto, CreateDictDataDto, UpdateDictDataDto } from './dto/dict-data.dto'

/**
 * 字典数据管理
 * @author vivy
 */
@ApiTags('字典数据管理')
@Controller('dict/data')
export class DictDataController {
  constructor(private dictDataService: DictDataService) {}

  /**
   * 查询字典数据列表
   * @author vivy
   * @param dictData 字典数据信息
   * @returns 字典数据列表
   */
  @Get('list')
  async list(@Query() dictData: ListDictDataDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictDataService.list(dictData))
  }

  /**
   * 添加字典数据
   * @param dictData 字典数据信息
   */
  @Log('字典数据管理', OperType.INSERT)
  @Post('add')
  async add(@Body() dictData: CreateDictDataDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictDataService.add(dictData))
  }

  /**
   * 更新字典数据
   * @param dictData 字典数据信息
   */
  @Log('字典数据管理', OperType.UPDATE)
  @Put('update')
  async update(@Body() dictData: UpdateDictDataDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictDataService.update(dictData))
  }

  /**
   * 根据字典类型查询字典数据选项列表
   * @param dictType 字典类型
   * @returns 字典数据选项列表
   */
  @Get('options/:dictType')
  async optionsByType(@Param('dictType') dictType: string): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictDataService.optionsByType(dictType))
  }
}
