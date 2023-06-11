import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, OperType } from '@vivy-cloud/common-logger'
import { DeptService } from './dept.service'
import { CreateDeptDto, UpdateDeptDto } from './dto/dept.dto'

/**
 * 部门管理
 * @author vivy
 */
@ApiTags('部门管理')
@Controller('dept')
export class DeptController {
  constructor(private deptService: DeptService) {}

  /**
   * 查询部门树结构
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Get('tree')
  async tree(): Promise<AjaxResult> {
    return AjaxResult.success(await this.deptService.tree())
  }

  /**
   * 添加部门
   * @param dept 部门信息
   */
  @Log('部门管理', OperType.INSERT)
  @Post('add')
  async add(@Body() dept: CreateDeptDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.deptService.add(dept))
  }

  /**
   * 更新部门
   * @param dept 部门信息
   */
  @Log('部门管理', OperType.UPDATE)
  @Put('update')
  async update(@Body() dept: UpdateDeptDto): Promise<AjaxResult> {
    if (dept.deptId === dept.parentId) {
      return AjaxResult.error(`修改部门${dept.deptName}失败，上级部门不能是自己`)
    }

    return AjaxResult.success(await this.deptService.update(dept))
  }

  /**
   * 删除部门
   * @param deptId 部门ID
   */
  @Log('部门管理', OperType.DELETE)
  @Delete('delete/:deptId')
  async delete(@Param('deptId') deptId: number): Promise<AjaxResult> {
    if (await this.deptService.checkDeptExistChild(deptId)) {
      return AjaxResult.error('存在下级部门,不允许删除')
    }

    if (await this.deptService.checkDeptExistUser(deptId)) {
      return AjaxResult.error('部门存在用户,不允许删除')
    }

    return AjaxResult.success(await this.deptService.delete(deptId))
  }

  /**
   * 部门详情
   * @param deptId 部门ID
   * @returns 部门详情
   */
  @Get('info/:deptId')
  async info(@Param('deptId') deptId: number): Promise<AjaxResult> {
    return AjaxResult.success(await this.deptService.info(deptId))
  }

  /**
   * 查询部门选项树
   * @returns 部门选项树
   */
  @Get('tree/selectable')
  async treeSelectable(): Promise<AjaxResult> {
    return AjaxResult.success(await this.deptService.treeSelectable())
  }
}
