import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { MappedEntity, BaseBusinessEntity } from '@vivy-cloud/common-core'

/**
 * 用户信息表
 */
@Entity({ name: 'sys_user' })
export class SysUser extends MappedEntity(BaseBusinessEntity) {
  @PrimaryGeneratedColumn({
    name: 'user_id',
    type: 'bigint',
    comment: '用户ID',
  })
  userId: number

  @Column({
    name: 'dept_id',
    type: 'bigint',
    nullable: true,
    comment: '部门ID',
  })
  deptId: number

  @Column({
    name: 'user_name',
    type: 'varchar',
    length: 50,
    unique: true,
    comment: '用户账号',
  })
  userName: string

  @Column({
    name: 'nick_name',
    type: 'varchar',
    length: 50,
    comment: '用户昵称',
  })
  nickName: string

  @Column({
    name: 'user_type',
    type: 'char',
    length: 2,
    default: '00',
    comment: '用户类型（00系统用户）',
  })
  userType: string

  @Column({
    name: 'email',
    type: 'varchar',
    length: 50,
    default: '',
    comment: '用户邮箱',
  })
  email: string

  @Column({
    name: 'phonenumber',
    type: 'varchar',
    length: 11,
    default: '',
    comment: '手机号码',
  })
  phonenumber: string

  @Column({
    name: 'sex',
    type: 'char',
    length: 1,
    default: '0',
    comment: '用户性别（0男 1女 2未知）',
  })
  sex: string

  @Column({
    name: 'avatar',
    type: 'varchar',
    length: 255,
    default: '',
    comment: '头像地址',
  })
  avatar: string

  @Column({
    name: 'password',
    type: 'varchar',
    length: 255,
    default: '',
    comment: '密码',
  })
  password: string

  @Column({
    name: 'status',
    type: 'char',
    length: 1,
    default: '0',
    comment: '用户状态（0正常 1停用）',
  })
  status: string

  @Column(() => BaseBusinessEntity, { prefix: false })
  private base: BaseBusinessEntity
}
