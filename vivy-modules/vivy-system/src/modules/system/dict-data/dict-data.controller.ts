import { Body, Controller, Delete, Get, Param, ParseArrayPipe, Post, Put, Query } from '@nestjs/common'
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
    if (!(await this.dictDataService.checkDictLabelUnique(dictData))) {
      return AjaxResult.error(`新增字典${dictData.dictLabel}失败，字典标签已存在`)
    }

    if (!(await this.dictDataService.checkDictValueUnique(dictData))) {
      return AjaxResult.error(`新增字典${dictData.dictLabel}失败，字典键值已存在`)
    }

    return AjaxResult.success(await this.dictDataService.add(dictData))
  }

  /**
   * 更新字典数据
   * @param dictData 字典数据信息
   */
  @Log('字典数据管理', OperType.UPDATE)
  @Put('update')
  async update(@Body() dictData: UpdateDictDataDto): Promise<AjaxResult> {
    if (!(await this.dictDataService.checkDictLabelUnique(dictData))) {
      return AjaxResult.error(`修改字典${dictData.dictLabel}失败，字典标签已存在`)
    }

    if (!(await this.dictDataService.checkDictValueUnique(dictData))) {
      return AjaxResult.error(`修改字典${dictData.dictLabel}失败，字典键值已存在`)
    }

    return AjaxResult.success(await this.dictDataService.update(dictData))
  }

  /**
   * 删除字典数据
   * @param dictIds 字典数据ID
   */
  @Log('字典数据管理', OperType.DELETE)
  @Delete('delete/:dictIds')
  async delete(@Param('dictIds', ParseArrayPipe) dictIds: number[]): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictDataService.delete(dictIds))
  }

  /**
   * 字典数据详情
   * @param dictId 字典数据ID
   * @returns 字典数据详情
   */
  @Get('info/:dictId')
  async info(@Param('dictId') dictId: number): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictDataService.info(dictId))
  }

  /**
   * 根据字典类型查询字典数据选项列表
   * @param dictType 字典类型
   * @returns 字典数据选项列表
   */
  @Get('options/:dictType')
  async optionsByDictType(@Param('dictType') dictType: string): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictDataService.optionsByDictType(dictType))
  }
}
