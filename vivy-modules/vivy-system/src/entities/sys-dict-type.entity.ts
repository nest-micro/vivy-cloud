import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { MappedEntity, BaseBusinessEntity } from '@vivy-cloud/common-core'

/**
 * 字典类型表
 */
@Entity({ name: 'sys_dict_type' })
export class SysDictType extends MappedEntity(BaseBusinessEntity) {
  @PrimaryGeneratedColumn({
    name: 'dict_id',
    type: 'bigint',
    comment: '字典ID',
  })
  dictId: number

  @Column({
    name: 'dict_name',
    type: 'varchar',
    length: 100,
    comment: '字典名称',
  })
  dictName: string

  @Column({
    name: 'dict_type',
    type: 'varchar',
    length: 100,
    unique: true,
    comment: '字典类型',
  })
  dictType: string

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

  @Column(() => BaseBusinessEntity, { prefix: false })
  private base: BaseBusinessEntity
}
