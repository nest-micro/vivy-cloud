import { Entity } from 'typeorm'
import { BaseEntity } from '@vivy-cloud/common-core'

/**
 * 部门表
 */
@Entity({ name: 'sys_dept' })
export class SysDept extends BaseEntity {
  // create table sys_dept (
  //   dept_id           bigint(20)      not null auto_increment    comment '部门id',
  //   parent_id         bigint(20)      default 0                  comment '父部门id',
  //   ancestors         varchar(50)     default ''                 comment '祖级列表',
  //   dept_name         varchar(30)     default ''                 comment '部门名称',
  //   order_num         int(4)          default 0                  comment '显示顺序',
  //   leader            varchar(20)     default null               comment '负责人',
  //   phone             varchar(11)     default null               comment '联系电话',
  //   email             varchar(50)     default null               comment '邮箱',
  //   status            char(1)         default '0'                comment '部门状态（0正常 1停用）',
  //   del_flag          char(1)         default '0'                comment '删除标志（0代表存在 2代表删除）',
  //   create_by         varchar(64)     default ''                 comment '创建者',
  //   create_time 	    datetime                                   comment '创建时间',
  //   update_by         varchar(64)     default ''                 comment '更新者',
  //   update_time       datetime                                   comment '更新时间',
  //   primary key (dept_id)
  // ) engine=innodb auto_increment=200 comment = '部门表';
}
