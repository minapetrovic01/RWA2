import { Module } from '@nestjs/common';
import { AlternativeController } from './alternative.controller';
import { AlternativeService } from './alternative.service';

@Module({
    imports: [],
    controllers: [AlternativeController],
    providers: [AlternativeService],
})
export class AlternativeModule {}
