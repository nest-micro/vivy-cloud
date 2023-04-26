import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { MappedEntity, BaseBusinessEntity } from '@vivy-cloud/common-core'

/**
 * 部门表
 */
@Entity({ name: 'sys_dept' })
export class SysDept extends MappedEntity(BaseBusinessEntity) {
  @PrimaryGeneratedColumn({
    name: 'dept_id',
    type: 'bigint',
    comment: '部门ID',
  })
  deptId: number

  @Column({
    name: 'parent_id',
    type: 'bigint',
    comment: '父部门ID',
  })
  parentId: number

  @Column({
    name: 'dept_name',
    type: 'varchar',
    length: 50,
    comment: '部门名称',
  })
  deptName: string

  @Column({
    name: 'dept_sort',
    type: 'int',
    default: 0,
    comment: '显示顺序',
  })
  deptSort: number

  @Column({
    name: 'status',
    type: 'char',
    length: 1,
    default: '0',
    comment: '部门状态（0正常 1停用）',
  })
  status: string

  @Column(() => BaseBusinessEntity, { prefix: false })
  private base: BaseBusinessEntity
}
