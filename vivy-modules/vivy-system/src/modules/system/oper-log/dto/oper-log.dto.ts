import { Allow } from 'class-validator'
import { OperType, OperStatus } from '@vivy-cloud/common-logger'
import { PartialType } from '@nestjs/mapped-types'
import { PaginateDto } from '@vivy-cloud/common-core'

/**
 * 列表
 */
export class ListOperLogDto extends PaginateDto {}

/**
 * 新增
 */
export class CreateOperLogDto {
  // @Column({
  //   name: 'title',
  //   type: 'varchar',
  //   length: 50,
  //   default: '',
  //   comment: '模块标题',
  // })
  @Allow()
  title: string

  // @Column({
  //   name: 'oper_type',
  //   type: 'tinyint',
  //   default: 0,
  //   comment: '操作类型(enum OperType)',
  // })
  @Allow()
  operType: OperType

  // @Column({
  //   name: 'oper_name',
  //   type: 'varchar',
  //   length: 50,
  //   default: '',
  //   comment: '操作人员',
  // })
  @Allow()
  operName: string

  // @Column({
  //   name: 'oper_method',
  //   type: 'varchar',
  //   length: 100,
  //   default: '',
  //   comment: '方法名称',
  // })
  @Allow()
  operMethod: string

  // @Column({
  //   name: 'oper_ip',
  //   type: 'varchar',
  //   length: 128,
  //   default: '',
  //   comment: '主机地址',
  // })
  @Allow()
  operIp: string

  // @Column({
  //   name: 'oper_location',
  //   type: 'varchar',
  //   length: 255,
  //   default: '',
  //   comment: '操作地点',
  // })
  @Allow()
  operLocation: string

  // @Column({
  //   name: 'oper_status',
  //   type: 'tinyint',
  //   default: 0,
  //   comment: '操作状态(enum OperStatus)',
  // })
  @Allow()
  operStatus: OperStatus

  // @Column({
  //   name: 'request_url',
  //   type: 'varchar',
  //   length: 255,
  //   default: '',
  //   comment: '请求URL',
  // })
  @Allow()
  requestUrl: string

  // @Column({
  //   name: 'request_method',
  //   type: 'varchar',
  //   length: 10,
  //   default: '',
  //   comment: '请求方式',
  // })
  @Allow()
  requestMethod: string

  // @Column({
  //   name: 'request_param',
  //   type: 'varchar',
  //   length: 2000,
  //   default: '',
  //   comment: '请求参数',
  // })
  @Allow()
  requestParam: string

  // @Column({
  //   name: 'request_result',
  //   type: 'varchar',
  //   length: 2000,
  //   default: '',
  //   comment: '请求返回参数',
  // })
  @Allow()
  requestResult: string

  // @Column({
  //   name: 'request_errmsg',
  //   type: 'varchar',
  //   length: 2000,
  //   default: '',
  //   comment: '请求错误消息',
  // })
  @Allow()
  requestErrmsg: string
}

/**
 * 更新
 */
export class UpdateOperLogDto extends PartialType(CreateOperLogDto) {
  // @PrimaryGeneratedColumn({
  //   name: 'oper_id',
  //   type: 'bigint',
  //   comment: '操作ID',
  // })
  @Allow()
  operId: number
}
