import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, OperType } from '@vivy-cloud/common-logger'
import { DictTypeService } from './dict-type.service'
import { ListDictTypeDto, CreateDictTypeDto, UpdateDictTypeDto } from './dto/dict-type.dto'

/**
 * 字典类型管理
 * @author vivy
 */
@ApiTags('字典类型管理')
@Controller('dict/type')
export class DictTypeController {
  constructor(private dictTypeService: DictTypeService) {}

  /**
   * 查询字典类型列表
   * @param dictType 字典类型信息
   * @returns 字典类型列表
   */
  @Get('list')
  async list(@Query() dictType: ListDictTypeDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictTypeService.list(dictType))
  }

  /**
   * 添加字典类型
   * @param dictType 字典类型信息
   */
  @Log('字典类型管理', OperType.INSERT)
  @Post('add')
  async add(@Body() dictType: CreateDictTypeDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictTypeService.add(dictType))
  }

  /**
   * 更新字典类型
   * @param dictType 字典类型信息
   */
  @Log('字典类型管理', OperType.UPDATE)
  @Put('update')
  async update(@Body() dictType: UpdateDictTypeDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictTypeService.update(dictType))
  }
}
