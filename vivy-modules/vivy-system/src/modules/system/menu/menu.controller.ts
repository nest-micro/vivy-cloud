import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, OperType } from '@vivy-cloud/common-logger'
import { MenuService } from './menu.service'
import { SearchMenuDto, CreateMenuDto, UpdateMenuDto } from './dto/menu.dto'

@ApiTags('菜单管理')
@Controller('menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

  /**
   * 查询菜单列表
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Get('tree')
  async tree(@Query() menu: SearchMenuDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.menuService.tree(menu))
  }

  /**
   * 添加菜单
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Log('菜单管理', OperType.INSERT)
  @Post('add')
  async add(@Body() menu: CreateMenuDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.menuService.add(menu))
  }

  /**
   * 更新菜单
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Log('菜单管理', OperType.UPDATE)
  @Post('update')
  async update(@Body() menu: UpdateMenuDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.menuService.update(menu))
  }
}
