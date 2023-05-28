import { Allow } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'
import { PaginateDto } from '@vivy-cloud/common-core'

/**
 * 新增
 */
export class CreateUserDto {
  // @Column({
  //   name: 'dept_id',
  //   type: 'int',
  //   nullable: true,
  //   comment: '部门ID',
  // })
  @Allow()
  deptId: number

  // @Column({
  //   name: 'user_name',
  //   type: 'varchar',
  //   length: 50,
  //   unique: true,
  //   comment: '用户账号',
  // })
  @Allow()
  userName: string

  // @Column({
  //   name: 'nick_name',
  //   type: 'varchar',
  //   length: 50,
  //   comment: '用户昵称',
  // })
  @Allow()
  nickName: string

  // @Column({
  //   name: 'user_type',
  //   type: 'char',
  //   length: 2,
  //   default: '00',
  //   comment: '用户类型（00系统用户）',
  // })
  @Allow()
  userType: string

  // @Column({
  //   name: 'email',
  //   type: 'varchar',
  //   length: 50,
  //   nullable: true,
  //   comment: '用户邮箱',
  // })
  @Allow()
  email: string

  // @Column({
  //   name: 'phonenumber',
  //   type: 'varchar',
  //   length: 11,
  //   nullable: true,
  //   comment: '手机号码',
  // })
  @Allow()
  phonenumber: string

  // @Column({
  //   name: 'sex',
  //   type: 'char',
  //   length: 1,
  //   default: '0',
  //   comment: '用户性别（0男 1女 2未知）',
  // })
  @Allow()
  sex: string

  // @Column({
  //   name: 'avatar',
  //   type: 'varchar',
  //   length: 255,
  //   nullable: true,
  //   comment: '头像地址',
  // })
  @Allow()
  avatar: string

  // @Column({
  //   name: 'password',
  //   type: 'varchar',
  //   length: 255,
  //   default: '',
  //   comment: '密码',
  // })
  @Allow()
  password: string

  // @Column({
  //   name: 'status',
  //   type: 'char',
  //   length: 1,
  //   default: '0',
  //   comment: '用户状态（0正常 1停用）',
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
export class UpdateUserDto extends PartialType(CreateUserDto) {
  // @PrimaryGeneratedColumn({
  //   name: 'user_id',
  //   type: 'int',
  //   comment: '用户ID',
  // })
  @Allow()
  userId: number
}

/**
 * 查询搜索
 */
export class SearchUserDto extends PaginateDto {}
