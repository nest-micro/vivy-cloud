import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, OperType } from '@vivy-cloud/common-logger'
import { DictTypeService } from './dict-type.service'
import { SearchDictTypeDto, CreateDictTypeDto, UpdateDictTypeDto } from './dto/dict-type.dto'

@ApiTags('字典类型管理')
@Controller('dict/type')
export class DictTypeController {
  constructor(private dictTypeService: DictTypeService) {}

  /**
   * 查询字典类型列表
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Get('list')
  async list(@Query() dictType: SearchDictTypeDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictTypeService.list(dictType))
  }

  /**
   * 添加字典类型
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Log('字典类型管理', OperType.INSERT)
  @Post('add')
  async add(@Body() dictType: CreateDictTypeDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictTypeService.add(dictType))
  }

  /**
   * 更新字典类型
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Log('字典类型管理', OperType.UPDATE)
  @Post('update')
  async update(@Body() dictType: UpdateDictTypeDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.dictTypeService.update(dictType))
  }
}
