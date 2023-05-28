import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, OperType } from '@vivy-cloud/common-logger'
import { DeptService } from './dept.service'
import { SearchDeptDto, CreateDeptDto, UpdateDeptDto } from './dto/dept.dto'

@ApiTags('部门管理')
@Controller('dept')
export class DeptController {
  constructor(private deptService: DeptService) {}

  /**
   * 查询部门列表
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Get('tree')
  async tree(@Query() dept: SearchDeptDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.deptService.tree(dept))
  }

  /**
   * 添加部门
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Log('部门管理', OperType.INSERT)
  @Post('add')
  async add(@Body() dept: CreateDeptDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.deptService.add(dept))
  }

  /**
   * 更新部门
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Log('部门管理', OperType.UPDATE)
  @Post('update')
  async update(@Body() dept: UpdateDeptDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.deptService.update(dept))
  }
}
