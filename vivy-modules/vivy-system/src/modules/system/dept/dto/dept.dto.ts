import { Allow } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'
import { PaginateDto } from '@vivy-cloud/common-core'

/**
 * 新增
 */
export class CreateDeptDto {
  // @Column({
  //   name: 'parent_id',
  //   type: 'int',
  //   comment: '父部门ID',
  // })
  @Allow()
  parentId: number

  // @Column({
  //   name: 'dept_name',
  //   type: 'varchar',
  //   length: 50,
  //   comment: '部门名称',
  // })
  @Allow()
  deptName: string

  // @Column({
  //   name: 'dept_sort',
  //   type: 'int',
  //   default: 0,
  //   comment: '显示顺序',
  // })
  @Allow()
  deptSort: number

  // @Column({
  //   name: 'status',
  //   type: 'char',
  //   length: 1,
  //   default: '0',
  //   comment: '部门状态（0正常 1停用）',
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
export class UpdateDeptDto extends PartialType(CreateDeptDto) {
  // @PrimaryGeneratedColumn({
  //   name: 'dept_id',
  //   type: 'int',
  //   comment: '部门ID',
  // })
  @Allow()
  deptId: number
}

/**
 * 查询搜索
 */
export class SearchDeptDto extends PaginateDto {}
