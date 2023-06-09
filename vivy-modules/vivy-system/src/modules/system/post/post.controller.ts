import { Body, Controller, Delete, Get, Param, ParseArrayPipe, Post, Put, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, OperType } from '@vivy-cloud/common-logger'
import { PostService } from './post.service'
import { ListPostDto, CreatePostDto, UpdatePostDto } from './dto/post.dto'

/**
 * 岗位管理
 * @author vivy
 */
@ApiTags('岗位管理')
@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  /**
   * 岗位列表
   * @param post 岗位信息
   * @returns 岗位列表
   */
  @Get('list')
  async list(@Query() post: ListPostDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.postService.list(post))
  }

  /**
   * 添加岗位
   * @param post 岗位信息
   */
  @Log('岗位管理', OperType.INSERT)
  @Post('add')
  async add(@Body() post: CreatePostDto): Promise<AjaxResult> {
    if (!(await this.postService.checkPostNameUnique(post))) {
      return AjaxResult.error(`新增岗位${post.postName}失败，岗位名称已存在`)
    }

    if (!(await this.postService.checkPostCodeUnique(post))) {
      return AjaxResult.error(`新增岗位${post.postName}失败，岗位编码已存在`)
    }

    return AjaxResult.success(await this.postService.add(post))
  }

  /**
   * 更新岗位
   * @param post 岗位信息
   */
  @Log('岗位管理', OperType.UPDATE)
  @Put('update')
  async update(@Body() post: UpdatePostDto): Promise<AjaxResult> {
    if (!(await this.postService.checkPostNameUnique(post))) {
      return AjaxResult.error(`修改岗位${post.postName}失败，岗位名称已存在`)
    }

    if (!(await this.postService.checkPostCodeUnique(post))) {
      return AjaxResult.error(`修改岗位${post.postName}失败，岗位编码已存在`)
    }

    return AjaxResult.success(await this.postService.update(post))
  }

  /**
   * 删除岗位
   * @param postIds 岗位ID
   */
  @Log('岗位管理', OperType.DELETE)
  @Delete('delete/:postIds')
  async delete(@Param('postIds', ParseArrayPipe) postIds: number[]): Promise<AjaxResult> {
    return AjaxResult.success(await this.postService.delete(postIds))
  }

  /**
   * 岗位详情
   * @param postId 岗位ID
   * @returns 岗位详情
   */
  @Get('info/:postId')
  async info(@Param('postId') postId: number): Promise<AjaxResult> {
    return AjaxResult.success(await this.postService.info(postId))
  }

  /**
   * 岗位选项列表
   * @returns 岗位选项列表
   */
  @Get('options/selectable')
  async optionsSelectable(): Promise<AjaxResult> {
    return AjaxResult.success(await this.postService.optionsSelectable())
  }
}
