import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { BaseBusinessEntity } from '@vivy-cloud/common-core'

/**
 * 岗位信息表
 */
@Entity({ name: 'sys_post' })
export class SysPost extends BaseBusinessEntity {
  @PrimaryGeneratedColumn({
    name: 'post_id',
    type: 'int',
    comment: '岗位ID',
  })
  postId: number

  @Column({
    name: 'post_name',
    type: 'varchar',
    length: 50,
    comment: '岗位名称',
  })
  postName: string

  @Column({
    name: 'post_code',
    type: 'varchar',
    length: 50,
    comment: '岗位编码',
  })
  postCode: string

  @Column({
    name: 'role_sort',
    type: 'int',
    default: 0,
    comment: '显示顺序',
  })
  roleSort: number

  @Column({
    name: 'status',
    type: 'char',
    length: 1,
    default: '0',
    comment: '部门状态（0正常 1停用）',
  })
  status: string
}
