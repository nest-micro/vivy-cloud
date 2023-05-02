import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { BaseBusinessEntity } from '@vivy-cloud/common-core'

/**
 * 字典数据表
 */
@Entity({ name: 'sys_dict_data' })
export class SysDictData extends BaseBusinessEntity {
  @PrimaryGeneratedColumn({
    name: 'dict_code',
    type: 'int',
    comment: '字典编码',
  })
  dictCode: number

  @Column({
    name: 'dict_label',
    type: 'varchar',
    length: 100,
    comment: '字典标签',
  })
  dictLabel: string

  @Column({
    name: 'dict_value',
    type: 'varchar',
    length: 100,
    unique: true,
    comment: '字典键值',
  })
  dictValue: string

  @Column({
    name: 'dict_sort',
    type: 'int',
    default: 0,
    comment: '显示顺序',
  })
  dictSort: number

  @Column({
    name: 'status',
    type: 'char',
    length: 1,
    default: '0',
    comment: '字典状态（0正常 1停用）',
  })
  status: string

  @Column({
    name: 'css_class',
    type: 'varchar',
    length: 100,
    default: '',
    comment: '样式属性（其他样式扩展）',
  })
  cssClass: string

  @Column({
    name: 'list_class',
    type: 'varchar',
    length: 100,
    default: '',
    comment: '表格回显样式',
  })
  listClass: string
}
