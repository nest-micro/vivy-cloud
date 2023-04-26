import { Column, Entity } from 'typeorm'
import { MappedEntity, BaseTimeEntity } from '@vivy-cloud/common-core'

/**
 * 角色和菜单关联表 角色1-N菜单
 */
@Entity({ name: 'sys_role_menu' })
export class SysRoleMenu extends MappedEntity(BaseTimeEntity) {
  @Column({
    name: 'role_id',
    type: 'bigint',
    primary: true,
    comment: '角色ID',
  })
  roleId: number

  @Column({
    name: 'menu_id',
    type: 'bigint',
    primary: true,
    comment: '菜单ID',
  })
  menuId: number

  @Column(() => BaseTimeEntity, { prefix: false })
  private base: BaseTimeEntity
}
