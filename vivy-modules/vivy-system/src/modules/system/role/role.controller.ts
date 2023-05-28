import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, OperType } from '@vivy-cloud/common-logger'
import { RoleService } from './role.service'
import { SearchRoleDto, CreateRoleDto, UpdateRoleDto } from './dto/role.dto'

@ApiTags('角色管理')
@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  /**
   * 查询角色列表
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Get('list')
  async list(@Query() role: SearchRoleDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.roleService.list(role))
  }

  /**
   * 添加角色
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Log('角色管理', OperType.INSERT)
  @Post('add')
  async add(@Body() role: CreateRoleDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.roleService.add(role))
  }

  /**
   * 更新角色
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Log('角色管理', OperType.UPDATE)
  @Post('update')
  async update(@Body() role: UpdateRoleDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.roleService.update(role))
  }
}
