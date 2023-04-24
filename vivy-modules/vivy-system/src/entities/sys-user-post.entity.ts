import { Entity } from 'typeorm'
import { BaseEntity } from '@vivy-cloud/common-core'

/**
 * 用户与岗位关联表 用户1-N岗位
 */
@Entity({ name: 'sys_user_post' })
export class SysUserPost extends BaseEntity {
  // create table sys_user_post
  // (
  //   user_id   bigint(20) not null comment '用户ID',
  //   post_id   bigint(20) not null comment '岗位ID',
  //   primary key (user_id, post_id)
  // ) engine=innodb comment = '用户与岗位关联表';
}
