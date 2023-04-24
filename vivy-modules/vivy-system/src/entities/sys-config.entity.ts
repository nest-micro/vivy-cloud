import { Entity } from 'typeorm'
import { BaseEntity } from '@vivy-cloud/common-core'

/**
 * 参数配置表
 */
@Entity({ name: 'sys_config' })
export class SysConfig extends BaseEntity {
  // create table sys_config (
  //   config_id         int(5)          not null auto_increment    comment '参数主键',
  //   config_name       varchar(100)    default ''                 comment '参数名称',
  //   config_key        varchar(100)    default ''                 comment '参数键名',
  //   config_value      varchar(500)    default ''                 comment '参数键值',
  //   config_type       char(1)         default 'N'                comment '系统内置（Y是 N否）',
  //   create_by         varchar(64)     default ''                 comment '创建者',
  //   create_time       datetime                                   comment '创建时间',
  //   update_by         varchar(64)     default ''                 comment '更新者',
  //   update_time       datetime                                   comment '更新时间',
  //   remark            varchar(500)    default null               comment '备注',
  //   primary key (config_id)
  // ) engine=innodb auto_increment=100 comment = '参数配置表';
}
