import { Entity } from 'typeorm'
import { BaseEntity } from '@vivy-cloud/common-core'

/**
 * 字典类型表
 */
@Entity({ name: 'sys_dict_type' })
export class SysDictType extends BaseEntity {
  // create table sys_dict_type
  // (
  //   dict_id          bigint(20)      not null auto_increment    comment '字典主键',
  //   dict_name        varchar(100)    default ''                 comment '字典名称',
  //   dict_type        varchar(100)    default ''                 comment '字典类型',
  //   status           char(1)         default '0'                comment '状态（0正常 1停用）',
  //   create_by        varchar(64)     default ''                 comment '创建者',
  //   create_time      datetime                                   comment '创建时间',
  //   update_by        varchar(64)     default ''                 comment '更新者',
  //   update_time      datetime                                   comment '更新时间',
  //   remark           varchar(500)    default null               comment '备注',
  //   primary key (dict_id),
  //   unique (dict_type)
  // ) engine=innodb auto_increment=100 comment = '字典类型表';
}
