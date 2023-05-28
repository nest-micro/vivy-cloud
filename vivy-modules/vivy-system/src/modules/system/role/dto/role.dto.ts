import { Allow } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'
import { PaginateDto } from '@vivy-cloud/common-core'

/**
 * 新增
 */
export class CreateRoleDto {
  // @Column({
  //   name: 'role_name',
  //   type: 'varchar',
  //   length: 50,
  //   comment: '角色名称',
  // })
  @Allow()
  roleName: string

  // @Column({
  //   name: 'role_code',
  //   type: 'varchar',
  //   length: 50,
  //   comment: '角色编码',
  // })
  @Allow()
  roleCode: string

  // @Column({
  //   name: 'role_sort',
  //   type: 'int',
  //   default: 0,
  //   comment: '显示顺序',
  // })
  @Allow()
  roleSort: number

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
export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  // @PrimaryGeneratedColumn({
  //   name: 'role_id',
  //   type: 'int',
  //   comment: '角色ID',
  // })
  @Allow()
  roleId: number
}

/**
 * 查询搜索
 */
export class SearchRoleDto extends PaginateDto {}
