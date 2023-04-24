import { Entity } from 'typeorm'
import { BaseEntity } from '@vivy-cloud/common-core'

/**
 * 登录日志表
 */
@Entity({ name: 'sys_login_log' })
export class SysLoginLog extends BaseEntity {
  // create table sys_logininfor (
  //   info_id        bigint(20)     not null auto_increment   comment '访问ID',
  //   user_name      varchar(50)    default ''                comment '用户账号',
  //   ipaddr         varchar(128)   default ''                comment '登录IP地址',
  //   status         char(1)        default '0'               comment '登录状态（0成功 1失败）',
  //   msg            varchar(255)   default ''                comment '提示信息',
  //   access_time    datetime                                 comment '访问时间',
  //   primary key (info_id)
  // ) engine=innodb auto_increment=100 comment = '系统访问记录';
}
