import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TreeUtils } from '@vivy-cloud/common-core'
import { SysMenu } from '@/entities/sys-menu.entity'
import { SearchMenuDto, CreateMenuDto, UpdateMenuDto } from './dto/menu.dto'
import { MenuTreeVo } from './vo/menu.vo'

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(SysMenu)
    private menuRepository: Repository<SysMenu>
  ) {}

  /**
   * 查询菜单列表
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  async tree(menu: SearchMenuDto): Promise<MenuTreeVo[]> {
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
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async add(menu: CreateMenuDto): Promise<void> {
    await this.menuRepository.insert(menu)
  }

  /**
   * 更新菜单
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async update(menu: UpdateMenuDto): Promise<void> {
    await this.menuRepository.update(menu.menuId, menu)
  }
}
