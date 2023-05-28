import { Allow } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'
import { PaginateDto } from '@vivy-cloud/common-core'

/**
 * 新增
 */
export class CreateMenuDto {
  // @Column({
  //   name: 'parent_id',
  //   type: 'int',
  //   comment: '父菜单ID',
  // })
  @Allow()
  parentId: number

  // @Column({
  //   name: 'menu_name',
  //   type: 'varchar',
  //   length: 50,
  //   comment: '菜单名称',
  // })
  @Allow()
  menuName: string

  // @Column({
  //   name: 'menu_type',
  //   type: 'char',
  //   length: 1,
  //   comment: '菜单类型（M目录 C菜单 F按钮）',
  // })
  @Allow()
  menuType: number

  // @Column({
  //   name: 'menu_sort',
  //   type: 'int',
  //   default: 0,
  //   comment: '显示顺序',
  // })
  @Allow()
  menuSort: number

  // @Column({
  //   name: 'status',
  //   type: 'char',
  //   length: 1,
  //   default: '0',
  //   comment: '菜单状态（0正常 1停用）',
  // })
  @Allow()
  status: string

  // @Column({
  //   name: 'path',
  //   type: 'varchar',
  //   length: 255,
  //   nullable: true,
  //   comment: '路由地址',
  // })
  @Allow()
  path: string

  // @Column({
  //   name: 'component',
  //   type: 'varchar',
  //   length: 255,
  //   nullable: true,
  //   comment: '组件路径',
  // })
  @Allow()
  component: string

  // @Column({
  //   name: 'query',
  //   type: 'varchar',
  //   length: 255,
  //   nullable: true,
  //   comment: '路由参数',
  // })
  @Allow()
  query: string

  // @Column({
  //   name: 'perms',
  //   type: 'varchar',
  //   length: 100,
  //   nullable: true,
  //   comment: '权限标识',
  // })
  @Allow()
  permission: string

  // @Column({
  //   name: 'icon',
  //   type: 'varchar',
  //   length: 100,
  //   default: '#',
  //   comment: '菜单图标',
  // })
  @Allow()
  icon: string

  // @Column({
  //   name: 'is_visible',
  //   type: 'tinyint',
  //   unsigned: true,
  //   default: 0,
  //   comment: '菜单状态（0显示 1隐藏）',
  // })
  @Allow()
  isVisible: number

  // @Column({
  //   name: 'is_link',
  //   type: 'tinyint',
  //   unsigned: true,
  //   default: 0,
  //   comment: '是否为外链（0否 1是）',
  // })
  @Allow()
  isLink: number

  // @Column({
  //   name: 'is_frame',
  //   type: 'tinyint',
  //   unsigned: true,
  //   default: 0,
  //   comment: '是否为内嵌（0否 1是）',
  // })
  @Allow()
  isFrame: number

  // @Column({
  //   name: 'is_cache',
  //   type: 'tinyint',
  //   unsigned: true,
  //   default: 0,
  //   comment: '是否缓存（0否 1是）',
  // })
  @Allow()
  isCache: number

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
export class UpdateMenuDto extends PartialType(CreateMenuDto) {
  // @PrimaryGeneratedColumn({
  //   name: 'menu_id',
  //   type: 'int',
  //   comment: '菜单ID',
  // })
  @Allow()
  menuId: number
}

/**
 * 查询搜索
 */
export class SearchMenuDto extends PaginateDto {}
