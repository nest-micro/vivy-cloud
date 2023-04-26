import { Column, Entity } from 'typeorm'
import { MappedEntity, BaseTimeEntity } from '@vivy-cloud/common-core'

/**
 * 角色和部门关联表 角色1-N部门
 */
@Entity({ name: 'sys_role_dept' })
export class SysRoleDept extends MappedEntity(BaseTimeEntity) {
  @Column({
    name: 'role_id',
    type: 'bigint',
    primary: true,
    comment: '用户ID',
  })
  roleId: number

  @Column({
    name: 'dept_id',
    type: 'bigint',
    primary: true,
    comment: '用户ID',
  })
  deptId: number

  @Column(() => BaseTimeEntity, { prefix: false })
  private base: BaseTimeEntity
}
