import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, OperType } from '@vivy-cloud/common-logger'
import { PostService } from './post.service'
import { SearchPostDto, CreatePostDto, UpdatePostDto } from './dto/post.dto'

@ApiTags('岗位管理')
@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  /**
   * 查询岗位列表
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Get('list')
  async list(@Query() post: SearchPostDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.postService.list(post))
  }

  /**
   * 添加岗位
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Log('岗位管理', OperType.INSERT)
  @Post('add')
  async add(@Body() post: CreatePostDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.postService.add(post))
  }

  /**
   * 更新岗位
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Log('岗位管理', OperType.UPDATE)
  @Post('update')
  async update(@Body() post: UpdatePostDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.postService.update(post))
  }
}
