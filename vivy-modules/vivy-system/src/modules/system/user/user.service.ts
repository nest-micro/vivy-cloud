import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { paginate, Pagination } from 'nestjs-typeorm-paginate'
import { SysUser } from '@/entities/sys-user.entity'
import { SearchUserDto, CreateUserDto, UpdateUserDto } from './dto/user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(SysUser)
    private userRepository: Repository<SysUser>
  ) {}

  /**
   * 查询用户列表
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  async list(user: SearchUserDto): Promise<Pagination<SysUser>> {
    return paginate<SysUser>(this.userRepository, {
      page: user.page,
      limit: user.limit,
    })
  }

  /**
   * 添加操作日志
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async add(user: CreateUserDto): Promise<void> {
    await this.userRepository.insert(user)
  }

  /**
   * 清空操作日志
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async update(user: UpdateUserDto): Promise<void> {
    await this.userRepository.update(user.userId, user)
  }

  /**
   * 根据用户名查询用户信息
   * @author vivy
   * @date 2023-05-07 18:56:22
   */
  async selectUserByUserName(userName: string): Promise<SysUser> {
    return this.userRepository.findOneBy({ userName })
  }
}
