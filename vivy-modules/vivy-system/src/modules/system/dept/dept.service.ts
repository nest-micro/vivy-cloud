import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TreeUtils } from '@vivy-cloud/common-core'
import { SysDept } from '@/entities/sys-dept.entity'
import { SearchDeptDto, CreateDeptDto, UpdateDeptDto } from './dto/dept.dto'
import { DeptTreeVo } from './vo/dept.vo'

@Injectable()
export class DeptService {
  constructor(
    @InjectRepository(SysDept)
    private deptRepository: Repository<SysDept>
  ) {}

  /**
   * 查询部门列表
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  async tree(dept: SearchDeptDto): Promise<DeptTreeVo[]> {
    const list = await this.deptRepository.find({
      order: {
        deptSort: 'ASC',
      },
    })
    return TreeUtils.listToTree<DeptTreeVo>(list, {
      id: 'deptId',
      pid: 'parentId',
    })
  }

  /**
   * 添加部门
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async add(dept: CreateDeptDto): Promise<void> {
    await this.deptRepository.insert(dept)
  }

  /**
   * 更新部门
   * @author vivy
   * @date 2023-04-26 17:14:14
   */
  async update(dept: UpdateDeptDto): Promise<void> {
    await this.deptRepository.update(dept.deptId, dept)
  }
}
