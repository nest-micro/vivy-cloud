import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { paginate, Pagination } from 'nestjs-typeorm-paginate'
import { SysPost } from '@/entities/sys-post.entity'
import { SearchPostDto, CreatePostDto, UpdatePostDto } from './dto/post.dto'

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(SysPost)
    private postRepository: Repository<SysPost>
  ) {}

  /**
   * 查询岗位列表
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  async list(post: SearchPostDto): Promise<Pagination<SysPost>> {
    return paginate<SysPost>(
      this.postRepository,
      {
        page: post.page,
        limit: post.limit,
      },
      {
        order: {
          postSort: 'ASC',
        },
      }
    )
  }

  /**
   * 添加岗位
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async add(post: CreatePostDto): Promise<void> {
    await this.postRepository.insert(post)
  }

  /**
   * 更新岗位
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async update(post: UpdatePostDto): Promise<void> {
    await this.postRepository.update(post.postId, post)
  }
}
