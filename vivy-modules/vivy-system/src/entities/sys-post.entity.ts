import { Entity } from 'typeorm'
import { BaseEntity } from '@vivy-cloud/common-core'

/**
 * 岗位信息表
 */
@Entity({ name: 'sys_post' })
export class SysPost extends BaseEntity {
  // create table sys_post
  // (
  //   post_id       bigint(20)      not null auto_increment    comment '岗位ID',
  //   post_code     varchar(64)     not null                   comment '岗位编码',
  //   post_name     varchar(50)     not null                   comment '岗位名称',
  //   post_sort     int(4)          not null                   comment '显示顺序',
  //   status        char(1)         not null                   comment '状态（0正常 1停用）',
  //   create_by     varchar(64)     default ''                 comment '创建者',
  //   create_time   datetime                                   comment '创建时间',
  //   update_by     varchar(64)     default ''			       comment '更新者',
  //   update_time   datetime                                   comment '更新时间',
  //   remark        varchar(500)    default null               comment '备注',
  //   primary key (post_id)
  // ) engine=innodb comment = '岗位信息表';
}
