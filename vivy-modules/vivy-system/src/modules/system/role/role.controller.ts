import { Controller } from '@nestjs/common'
import { RoleService } from './role.service'

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}
}
