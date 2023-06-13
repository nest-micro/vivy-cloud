import { Body, Controller, Delete, Get, Param, ParseArrayPipe, Post, Put, Query } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, OperType } from '@vivy-cloud/common-logger'
import { RequirePermissions } from '@vivy-cloud/common-security'
import { RoleService } from './role.service'
import { ListRoleDto, CreateRoleDto, UpdateRoleDto } from './dto/role.dto'

/**
 * 角色管理
 * @author vivy
 */
@ApiTags('角色管理')
@ApiBearerAuth()
@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  /**
   * 角色列表
   * @param role 角色信息
   * @returns 角色列表
   */
  @Get('list')
  @RequirePermissions('system:role:query')
  async list(@Query() role: ListRoleDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.roleService.list(role))
  }

  /**
   * 添加角色
   * @param role 角色信息
   */
  @Post('add')
  @Log('角色管理', OperType.INSERT)
  @RequirePermissions('system:role:add')
  async add(@Body() role: CreateRoleDto): Promise<AjaxResult> {
    if (!(await this.roleService.checkRoleNameUnique(role))) {
      return AjaxResult.error(`新增角色${role.roleName}失败，角色名称已存在`)
    }

    if (!(await this.roleService.checkRoleCodeUnique(role))) {
      return AjaxResult.error(`新增角色${role.roleName}失败，角色权限已存在`)
    }

    return AjaxResult.success(await this.roleService.add(role))
  }

  /**
   * 更新角色
   * @param role 角色信息
   */
  @Put('update')
  @Log('角色管理', OperType.UPDATE)
  @RequirePermissions('system:role:update')
  async update(@Body() role: UpdateRoleDto): Promise<AjaxResult> {
    this.roleService.checkRoleAllowed(role)

    if (!(await this.roleService.checkRoleNameUnique(role))) {
      return AjaxResult.error(`修改角色${role.roleName}失败，角色名称已存在`)
    }

    if (!(await this.roleService.checkRoleCodeUnique(role))) {
      return AjaxResult.error(`修改角色${role.roleName}失败，角色权限已存在`)
    }

    return AjaxResult.success(await this.roleService.update(role))
  }

  /**
   * 删除角色
   * @param roleIds 角色ID
   */
  @Delete('delete/:roleIds')
  @Log('角色管理', OperType.DELETE)
  @RequirePermissions('system:role:delete')
  async delete(@Param('roleIds', new ParseArrayPipe({ items: Number })) roleIds: number[]): Promise<AjaxResult> {
    this.roleService.checkRoleAllowed(roleIds)
    return AjaxResult.success(await this.roleService.delete(roleIds))
  }

  /**
   * 角色详情
   * @param roleId 角色ID
   * @returns 角色详情
   */
  @Get('info/:roleId')
  @RequirePermissions('system:role:query')
  async info(@Param('roleId') roleId: number): Promise<AjaxResult> {
    return AjaxResult.success(await this.roleService.info(roleId))
  }

  /**
   * 角色选项列表
   * @returns 角色选项列表
   */
  @Get('options/selectable')
  async optionsSelectable(): Promise<AjaxResult> {
    return AjaxResult.success(await this.roleService.optionsSelectable())
  }
}
