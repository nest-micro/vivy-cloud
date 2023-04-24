import { Entity } from 'typeorm'
import { BaseEntity } from '@vivy-cloud/common-core'

/**
 * 用户和角色关联表 用户N-1角色
 */
@Entity({ name: 'sys_user_role' })
export class SysUserRole extends BaseEntity {
  // create table sys_user_role (
  //   user_id   bigint(20) not null comment '用户ID',
  //   role_id   bigint(20) not null comment '角色ID',
  //   primary key(user_id, role_id)
  // ) engine=innodb comment = '用户和角色关联表';
}
