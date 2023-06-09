import { Body, Controller, Delete, Get, Param, ParseArrayPipe, Post, Put, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AjaxResult } from '@vivy-cloud/common-core'
import { Log, OperType } from '@vivy-cloud/common-logger'
import { UserService } from './user.service'
import { ListUserDto, CreateUserDto, UpdateUserDto } from './dto/user.dto'

/**
 * 用户管理
 * @author vivy
 */
@ApiTags('用户管理')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  /**
   * 用户列表
   * @param user 用户信息
   * @returns 用户列表
   */
  @Get('list')
  async list(@Query() user: ListUserDto): Promise<AjaxResult> {
    return AjaxResult.success(await this.userService.list(user))
  }

  /**
   * 添加用户
   * @param user 用户信息
   */
  @Log('用户管理', OperType.INSERT)
  @Post('add')
  async add(@Body() user: CreateUserDto): Promise<AjaxResult> {
    if (!(await this.userService.checkUserNameUnique(user))) {
      return AjaxResult.error(`新增用户${user.userName}失败，登录账号已存在`)
    }

    return AjaxResult.success(await this.userService.add(user))
  }

  /**
   * 更新用户
   * @param user 用户信息
   */
  @Log('用户管理', OperType.UPDATE)
  @Put('update')
  async update(@Body() user: UpdateUserDto): Promise<AjaxResult> {
    this.userService.checkUserAllowed(user)

    if (!(await this.userService.checkUserNameUnique(user))) {
      return AjaxResult.error(`修改用户${user.userName}失败，登录账号已存在`)
    }

    return AjaxResult.success(await this.userService.update(user))
  }

  /**
   * 删除用户
   * @param userIds 用户ID
   */
  @Log('用户管理', OperType.DELETE)
  @Delete('delete/:userIds')
  async delete(@Param('userIds', new ParseArrayPipe({ items: Number })) userIds: number[]): Promise<AjaxResult> {
    this.userService.checkUserAllowed(userIds)
    return AjaxResult.success(await this.userService.delete(userIds))
  }

  /**
   * 用户详情
   * @param userId 用户ID
   * @returns 用户详情
   */
  @Get('info/:userId')
  async info(@Param('userId') userId: number): Promise<AjaxResult> {
    return AjaxResult.success(await this.userService.info(userId))
  }
}
