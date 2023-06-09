import { Allow } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'
import { PaginateDto } from '@vivy-cloud/common-core'

/**
 * 列表
 */
export class ListDictTypeDto extends PaginateDto {}

/**
 * 新增
 */
export class CreateDictTypeDto {
  // @Column({
  //   name: 'dict_name',
  //   type: 'varchar',
  //   length: 100,
  //   comment: '字典名称',
  // })
  @Allow()
  dictName: string

  // @Column({
  //   name: 'dict_type',
  //   type: 'varchar',
  //   length: 100,
  //   comment: '字典类型',
  // })
  @Allow()
  dictType: string

  // @Column({
  //   name: 'dict_sort',
  //   type: 'int',
  //   default: 0,
  //   comment: '显示顺序',
  // })
  @Allow()
  dictSort: number

  // @Column({
  //   name: 'status',
  //   type: 'char',
  //   length: 1,
  //   default: '0',
  //   comment: '字典状态（0正常 1停用）',
  // })
  @Allow()
  status: string

  // @Column({
  //   name: 'remark',
  //   type: 'varchar',
  //   length: 500,
  //   nullable: true,
  //   comment: '备注',
  // })
  @Allow()
  remark: string
}

/**
 * 更新
 */
export class UpdateDictTypeDto extends PartialType(CreateDictTypeDto) {
  // @PrimaryGeneratedColumn({
  //   name: 'dict_id',
  //   type: 'int',
  //   comment: '字典ID',
  // })
  @Allow()
  dictId: number
}
