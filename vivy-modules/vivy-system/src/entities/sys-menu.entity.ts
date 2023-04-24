import { Entity } from 'typeorm'
import { BaseEntity } from '@vivy-cloud/common-core'

/**
 * 菜单权限表
 */
@Entity({ name: 'sys_menu' })
export class SysMenu extends BaseEntity {
  // create table sys_menu (
  //   menu_id           bigint(20)      not null auto_increment    comment '菜单ID',
  //   menu_name         varchar(50)     not null                   comment '菜单名称',
  //   parent_id         bigint(20)      default 0                  comment '父菜单ID',
  //   order_num         int(4)          default 0                  comment '显示顺序',
  //   path              varchar(200)    default ''                 comment '路由地址',
  //   component         varchar(255)    default null               comment '组件路径',
  //   query             varchar(255)    default null               comment '路由参数',
  //   is_frame          int(1)          default 1                  comment '是否为外链（0是 1否）',
  //   is_cache          int(1)          default 0                  comment '是否缓存（0缓存 1不缓存）',
  //   menu_type         char(1)         default ''                 comment '菜单类型（M目录 C菜单 F按钮）',
  //   visible           char(1)         default 0                  comment '菜单状态（0显示 1隐藏）',
  //   status            char(1)         default 0                  comment '菜单状态（0正常 1停用）',
  //   perms             varchar(100)    default null               comment '权限标识',
  //   icon              varchar(100)    default '#'                comment '菜单图标',
  //   create_by         varchar(64)     default ''                 comment '创建者',
  //   create_time       datetime                                   comment '创建时间',
  //   update_by         varchar(64)     default ''                 comment '更新者',
  //   update_time       datetime                                   comment '更新时间',
  //   remark            varchar(500)    default ''                 comment '备注',
  //   primary key (menu_id)
  // ) engine=innodb auto_increment=2000 comment = '菜单权限表';
}
