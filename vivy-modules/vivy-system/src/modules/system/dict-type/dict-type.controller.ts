import { Controller } from '@nestjs/common'
import { DictTypeService } from './dict-type.service'

@Controller('dict/type')
export class DictTypeController {
  constructor(private readonly dictTypeService: DictTypeService) {}
}
