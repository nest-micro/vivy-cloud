import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { SysUser } from '@/entities/sys-user.entity'
import { SysUserRole } from '@/entities/sys-user-role.entity'
import { SysUserPost } from '@/entities/sys-user-post.entity'
import { SysDept } from '@/entities/sys-dept.entity'
import { SysRole } from '@/entities/sys-role.entity'
import { SysRoleDept } from '@/entities/sys-role-dept.entity'
import { SysRoleMenu } from '@/entities/sys-role-menu.entity'
import { SysPost } from '@/entities/sys-post.entity'
import { SysMenu } from '@/entities/sys-menu.entity'
import { SysDictType } from '@/entities/sys-dict-type.entity'
import { SysDictData } from '@/entities/sys-dict-data.entity'
import { SysLoginLog } from '@/entities/sys-login-log.entity'
import { SysOperLog } from '@/entities/sys-oper-log.entity'

// user
import { UserService } from './user/user.service'
import { UserController } from './user/user.controller'

// dept
import { DeptService } from './dept/dept.service'
import { DeptController } from './dept/dept.controller'

// role
import { RoleService } from './role/role.service'
import { RoleController } from './role/role.controller'

// post
import { PostService } from './post/post.service'
import { PostController } from './post/post.controller'

// menu
import { MenuService } from './menu/menu.service'
import { MenuController } from './menu/menu.controller'

// dict-type
import { DictTypeService } from './dict-type/dict-type.service'
import { DictTypeController } from './dict-type/dict-type.controller'

// dict-data
import { DictDataService } from './dict-data/dict-data.service'
import { DictDataController } from './dict-data/dict-data.controller'

// oper-log
import { OperLogService } from './oper-log/oper-log.service'
import { OperLogController } from './oper-log/oper-log.controller'

// login-log
import { LoginLogService } from './login-log/login-log.service'
import { LoginLogController } from './login-log/login-log.controller'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SysUser,
      SysUserRole,
      SysUserPost,
      SysDept,
      SysRole,
      SysRoleDept,
      SysRoleMenu,
      SysPost,
      SysMenu,
      SysDictType,
      SysDictData,
      SysOperLog,
      SysLoginLog,
    ]),
  ],
  controllers: [
    UserController,
    DeptController,
    RoleController,
    PostController,
    MenuController,
    DictTypeController,
    DictDataController,
    OperLogController,
    LoginLogController,
  ],
  providers: [
    UserService,
    DeptService,
    RoleService,
    PostService,
    MenuService,
    DictTypeService,
    DictDataService,
    OperLogService,
    LoginLogService,
  ],
  exports: [UserService, OperLogService, LoginLogService],
})
export class SystemModule {}
