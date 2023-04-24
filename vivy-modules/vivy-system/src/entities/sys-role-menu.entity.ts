import { Entity } from 'typeorm'
import { BaseEntity } from '@vivy-cloud/common-core'

/**
 * 角色和菜单关联表 角色1-N菜单
 */
@Entity({ name: 'sys_role_menu' })
export class SysRoleMenu extends BaseEntity {
  // create table sys_role_menu (
  //   role_id   bigint(20) not null comment '角色ID',
  //   menu_id   bigint(20) not null comment '菜单ID',
  //   primary key(role_id, menu_id)
  // ) engine=innodb comment = '角色和菜单关联表';
}
