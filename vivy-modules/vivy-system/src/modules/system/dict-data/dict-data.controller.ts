import { Controller } from '@nestjs/common'
import { DictDataService } from './dict-data.service'

@Controller('dict/data')
export class DictDataController {
  constructor(private readonly dictDataService: DictDataService) {}
}
