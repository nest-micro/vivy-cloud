import { Allow } from 'class-validator'
import { LoginType, OperStatus } from '@vivy-cloud/common-logger'
import { PartialType } from '@nestjs/mapped-types'
import { PaginateDto } from '@vivy-cloud/common-core'

/**
 * 新增
 */
export class CreateLoginLogDto {
  // @Column({
  //   name: 'login_name',
  //   type: 'varchar',
  //   length: 50,
  //   default: '',
  //   comment: '用户账号',
  // })
  @Allow()
  loginName: string

  // @Column({
  //   name: 'login_type',
  //   type: 'tinyint',
  //   unsigned: true,
  //   default: 0,
  //   comment: '登录类型(enum LoginType)',
  // })
  @Allow()
  loginType: LoginType

  // @Column({
  //   name: 'login_status',
  //   type: 'tinyint',
  //   unsigned: true,
  //   default: 0,
  //   comment: '登录状态(enum OperStatus)',
  // })
  @Allow()
  loginStatus: OperStatus

  // @Column({
  //   name: 'login_ip',
  //   type: 'varchar',
  //   length: 128,
  //   default: '',
  //   comment: '主机地址',
  // })
  @Allow()
  loginIp: string

  // @Column({
  //   name: 'login_location',
  //   type: 'varchar',
  //   length: 255,
  //   default: '',
  //   comment: '登录地点',
  // })
  @Allow()
  loginLocation: string

  // @Column({
  //   name: 'login_message',
  //   type: 'varchar',
  //   length: 255,
  //   default: '',
  //   comment: '登录信息',
  // })
  @Allow()
  loginMessage: string

  // @Column({
  //   name: 'user_agent',
  //   type: 'varchar',
  //   length: 500,
  //   default: '',
  //   comment: '用户代理',
  // })
  @Allow()
  userAgent: string
}

/**
 * 更新
 */
export class UpdateLoginLogDto extends PartialType(CreateLoginLogDto) {
  // @PrimaryGeneratedColumn({
  //   name: 'login_id',
  //   type: 'int',
  //   comment: '登录ID',
  // })
  @Allow()
  loginId: number
}

/**
 * 查询搜索
 */
export class SearchLoginLogDto extends PaginateDto {}
