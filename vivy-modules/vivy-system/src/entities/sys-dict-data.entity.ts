import { Entity } from 'typeorm'
import { BaseEntity } from '@vivy-cloud/common-core'

/**
 * 字典数据表
 */
@Entity({ name: 'sys_dict_data' })
export class SysDictData extends BaseEntity {
  // create table sys_dict_data
  // (
  //   dict_code        bigint(20)      not null auto_increment    comment '字典编码',
  //   dict_sort        int(4)          default 0                  comment '字典排序',
  //   dict_label       varchar(100)    default ''                 comment '字典标签',
  //   dict_value       varchar(100)    default ''                 comment '字典键值',
  //   dict_type        varchar(100)    default ''                 comment '字典类型',
  //   css_class        varchar(100)    default null               comment '样式属性（其他样式扩展）',
  //   list_class       varchar(100)    default null               comment '表格回显样式',
  //   is_default       char(1)         default 'N'                comment '是否默认（Y是 N否）',
  //   status           char(1)         default '0'                comment '状态（0正常 1停用）',
  //   create_by        varchar(64)     default ''                 comment '创建者',
  //   create_time      datetime                                   comment '创建时间',
  //   update_by        varchar(64)     default ''                 comment '更新者',
  //   update_time      datetime                                   comment '更新时间',
  //   remark           varchar(500)    default null               comment '备注',
  //   primary key (dict_code)
  // ) engine=innodb auto_increment=100 comment = '字典数据表';
}
