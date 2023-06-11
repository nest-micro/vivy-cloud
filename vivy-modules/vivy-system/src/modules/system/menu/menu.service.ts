import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TreeUtils, BaseStatusEnums } from '@vivy-cloud/common-core'
import { SysMenu } from '@/entities/sys-menu.entity'
import { SysRoleMenu } from '@/entities/sys-role-menu.entity'
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
    private menuRepository: Repository<SysMenu>,

    @InjectRepository(SysRoleMenu)
    private roleMenuRepository: Repository<SysRoleMenu>
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

  /**
   * 删除菜单
   * @param menuId 菜单ID
   */
  async delete(menuId: number): Promise<void> {
    await this.menuRepository.delete(menuId)
  }

  /**
   * 菜单详情
   * @param menuId 菜单ID
   * @returns 菜单详情
   */
  async info(menuId: number): Promise<SysMenu> {
    return this.menuRepository.findOneBy({ menuId })
  }

  /**
   * 是否存在子节点
   * @param menuId 菜单ID
   * @return true 存在 / false 不存在
   */
  async checkMenuExistChild(deptId: number): Promise<boolean> {
    const count = await this.menuRepository.countBy({ parentId: deptId })
    return count > 0
  }

  /**
   * 检查是否存在juese
   * @param menuId 菜单ID
   * @return true 存在 / false 不存在
   */
  async checkMenuExistRole(menuId: number): Promise<boolean> {
    const count = await this.roleMenuRepository.countBy({ menuId })
    return count > 0
  }

  /**
   * 查询菜单选项树
   * @returns 菜单选项树
   */
  async treeSelectable(): Promise<MenuTreeVo[]> {
    const list = await this.menuRepository.find({
      select: ['menuId', 'menuName', 'parentId'],
      order: {
        menuSort: 'ASC',
      },
      where: {
        status: BaseStatusEnums.NORMAL,
      },
    })
    return TreeUtils.listToTree<MenuTreeVo>(list, {
      id: 'menuId',
      pid: 'parentId',
    })
  }
}
