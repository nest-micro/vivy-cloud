import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { paginate, Pagination } from 'nestjs-typeorm-paginate'
import { SysRole } from '@/entities/sys-role.entity'
import { SearchRoleDto, CreateRoleDto, UpdateRoleDto } from './dto/role.dto'

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(SysRole)
    private roleRepository: Repository<SysRole>
  ) {}

  /**
   * 查询角色列表
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  async list(role: SearchRoleDto): Promise<Pagination<SysRole>> {
    return paginate<SysRole>(
      this.roleRepository,
      {
        page: role.page,
        limit: role.limit,
      },
      {
        order: {
          roleSort: 'ASC',
        },
      }
    )
  }

  /**
   * 添加角色
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async add(role: CreateRoleDto): Promise<void> {
    await this.roleRepository.insert(role)
  }

  /**
   * 更新角色
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async update(role: UpdateRoleDto): Promise<void> {
    await this.roleRepository.update(role.roleId, role)
  }
}
