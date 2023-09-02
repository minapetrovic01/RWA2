import { Controller } from '@nestjs/common';
import { AlternativeService } from './alternative.service';

@Controller('alternative')
export class AlternativeController {
    constructor(private alternativeService: AlternativeService) {}
}
