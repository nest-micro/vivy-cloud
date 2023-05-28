import { Allow } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'
import { PaginateDto } from '@vivy-cloud/common-core'

/**
 * 新增
 */
export class CreatePostDto {
  // @Column({
  //   name: 'post_name',
  //   type: 'varchar',
  //   length: 50,
  //   comment: '岗位名称',
  // })
  @Allow()
  postName: string

  // @Column({
  //   name: 'post_code',
  //   type: 'varchar',
  //   length: 50,
  //   comment: '岗位编码',
  // })
  @Allow()
  postCode: string

  // @Column({
  //   name: 'post_sort',
  //   type: 'int',
  //   default: 0,
  //   comment: '显示顺序',
  // })
  @Allow()
  postSort: number

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
export class UpdatePostDto extends PartialType(CreatePostDto) {
  // @PrimaryGeneratedColumn({
  //   name: 'post_id',
  //   type: 'int',
  //   comment: '岗位ID',
  // })
  @Allow()
  postId: number
}

/**
 * 查询搜索
 */
export class SearchPostDto extends PaginateDto {}
