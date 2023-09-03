import { Module } from '@nestjs/common';
import { AlternativeController } from './alternative.controller';
import { AlternativeService } from './alternative.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alternative } from 'src/entities/alternative';

@Module({
    imports: [TypeOrmModule.forFeature([Alternative])],
    controllers: [AlternativeController],
    providers: [AlternativeService],
})
export class AlternativeModule {}
