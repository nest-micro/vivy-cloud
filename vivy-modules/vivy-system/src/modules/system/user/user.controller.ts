import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, BusinessType } from '@vivy-cloud/common-logger'
import { UserService } from './user.service'
import { SearchUserDto, CreateUserDto, UpdateUserDto } from './dto/user.dto'

@ApiTags('用户管理')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  /**
   * 查询用户列表
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Get('list')
  async list(@Query() user: SearchUserDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.userService.list(user))
  }

  /**
   * 添加用户
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Log('用户管理', BusinessType.INSERT)
  @Post('add')
  async add(@Body() user: CreateUserDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.userService.add(user))
  }

  /**
   * 更新用户
   * @author vivy
   * @date 2023-05-02 21:24:50
   */
  @Log('用户管理', BusinessType.UPDATE)
  @Post('update')
  async update(@Body() user: UpdateUserDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.userService.update(user))
  }
}
