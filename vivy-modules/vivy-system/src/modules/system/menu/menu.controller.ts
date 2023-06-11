import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, OperType } from '@vivy-cloud/common-logger'
import { MenuService } from './menu.service'
import { CreateMenuDto, UpdateMenuDto } from './dto/menu.dto'

/**
 * 菜单管理
 * @author vivy
 */
@ApiTags('菜单管理')
@Controller('menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

  /**
   * 查询菜单树结构
   */
  @Get('tree')
  async tree(): Promise<AjaxResult> {
    return AjaxResult.success(await this.menuService.tree())
  }

  /**
   * 添加菜单
   * @param menu 菜单信息
   */
  @Log('菜单管理', OperType.INSERT)
  @Post('add')
  async add(@Body() menu: CreateMenuDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.menuService.add(menu))
  }

  /**
   * 更新菜单
   * @param menu 菜单信息
   */
  @Log('菜单管理', OperType.UPDATE)
  @Put('update')
  async update(@Body() menu: UpdateMenuDto): Promise<AjaxResult> {
    if (menu.menuId === menu.parentId) {
      return AjaxResult.error(`修改菜单${menu.menuName}失败，上级菜单不能是自己`)
    }

    return AjaxResult.success(await this.menuService.update(menu))
  }

  /**
   * 删除菜单
   * @param menuId 菜单ID
   */
  @Log('菜单管理', OperType.DELETE)
  @Delete('delete/:menuId')
  async delete(@Param('menuId') menuId: number): Promise<AjaxResult> {
    if (await this.menuService.checkMenuExistChild(menuId)) {
      return AjaxResult.error('存在下级菜单,不允许删除')
    }

    if (await this.menuService.checkMenuExistRole(menuId)) {
      return AjaxResult.error('菜单已分配角色,不允许删除')
    }

    return AjaxResult.success(await this.menuService.delete(menuId))
  }

  /**
   * 菜单详情
   * @param menuId 菜单ID
   * @returns 菜单详情
   */
  @Get('info/:menuId')
  async info(@Param('menuId') menuId: number): Promise<AjaxResult> {
    return AjaxResult.success(await this.menuService.info(menuId))
  }

  /**
   * 查询菜单选项树
   * @returns 菜单选项树
   */
  @Get('tree/selectable')
  async treeSelectable(): Promise<AjaxResult> {
    return AjaxResult.success(await this.menuService.treeSelectable())
  }
}
