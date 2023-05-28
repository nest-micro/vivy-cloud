import { Allow } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'
import { PaginateDto } from '@vivy-cloud/common-core'

/**
 * 新增
 */
export class CreateDictDataDto {
  // @Column({
  //   name: 'dict_type',
  //   type: 'varchar',
  //   length: 100,
  //   comment: '字典类型',
  // })
  @Allow()
  dictType: string

  // @Column({
  //   name: 'dict_label',
  //   type: 'varchar',
  //   length: 100,
  //   comment: '字典标签',
  // })
  @Allow()
  dictLabel: string

  // @Column({
  //   name: 'dict_value',
  //   type: 'varchar',
  //   length: 100,
  //   comment: '字典键值',
  // })
  @Allow()
  dictValue: string

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
  //   name: 'css_class',
  //   type: 'varchar',
  //   length: 100,
  //   nullable: true,
  //   comment: '样式属性（其他样式扩展）',
  // })
  @Allow()
  cssClass: string

  // @Column({
  //   name: 'list_class',
  //   type: 'varchar',
  //   length: 100,
  //   nullable: true,
  //   comment: '表格回显样式',
  // })
  @Allow()
  listClass: string

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
export class UpdateDictDataDto extends PartialType(CreateDictDataDto) {
  // @PrimaryGeneratedColumn({
  //   name: 'dict_id',
  //   type: 'int',
  //   comment: '字典ID',
  // })
  @Allow()
  dictId: number
}

/**
 * 查询搜索
 */
export class SearchDictDataDto extends PaginateDto {
  // @Column({
  //   name: 'dict_type',
  //   type: 'varchar',
  //   length: 100,
  //   comment: '字典类型',
  // })
  @Allow()
  dictType: string
}
