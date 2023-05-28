import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, OperType } from '@vivy-cloud/common-logger'
import { DictDataService } from './dict-data.service'
import { SearchDictDataDto, CreateDictDataDto, UpdateDictDataDto } from './dto/dict-data.dto'

@ApiTags('字典数据管理')
@Controller('dict/data')
export class DictDataController {
  constructor(private dictDataService: DictDataService) {}

  /**
   * 查询字典数据列表
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Get('list')
  async list(@Query() dictData: SearchDictDataDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictDataService.list(dictData))
  }

  /**
   * 添加字典数据
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Log('字典数据管理', OperType.INSERT)
  @Post('add')
  async add(@Body() dictData: CreateDictDataDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictDataService.add(dictData))
  }

  /**
   * 更新字典数据
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Log('字典数据管理', OperType.UPDATE)
  @Post('update')
  async update(@Body() dictData: UpdateDictDataDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictDataService.update(dictData))
  }

  /**
   * 根据字典类型查询字典数据列表
   * @author vivy
   * @date 2023-05-27 18:33:27
   */
  @Get('option/:dictType')
  async optionByType(@Param('dictType') dictType: string): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictDataService.optionByType(dictType))
  }
}
