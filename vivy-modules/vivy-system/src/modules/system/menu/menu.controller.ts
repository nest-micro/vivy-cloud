import { Body, Controller, Get, Post, Put } from '@nestjs/common'
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
    return AjaxResult.success(await this.menuService.update(menu))
  }
}
