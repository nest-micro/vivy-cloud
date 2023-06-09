import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TreeUtils } from '@vivy-cloud/common-core'
import { SysMenu } from '@/entities/sys-menu.entity'
import { CreateMenuDto, UpdateMenuDto } from './dto/menu.dto'
import { MenuTreeVo } from './vo/menu.vo'

/**
 * 菜单管理
 * @author vivy
 */
@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(SysMenu)
    private menuRepository: Repository<SysMenu>
  ) {}

  /**
   * 查询菜单树结构
   */
  async tree(): Promise<MenuTreeVo[]> {
    const list = await this.menuRepository.find({
      order: {
        menuSort: 'ASC',
      },
    })
    return TreeUtils.listToTree<MenuTreeVo>(list, {
      id: 'menuId',
      pid: 'parentId',
    })
  }

  /**
   * 添加菜单
   * @param menu 菜单信息
   */
  async add(menu: CreateMenuDto): Promise<void> {
    await this.menuRepository.insert(menu)
  }

  /**
   * 更新菜单
   * @param menu 菜单信息
   */
  async update(menu: UpdateMenuDto): Promise<void> {
    await this.menuRepository.update(menu.menuId, menu)
  }
}
