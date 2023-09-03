import { Module } from '@nestjs/common';
import { AlternativeController } from './alternative.controller';
import { AlternativeService } from './alternative.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alternative } from 'src/entities/alternative';
import { DecisionModule } from 'src/decision/decision.module';

@Module({
    imports: [TypeOrmModule.forFeature([Alternative]),DecisionModule],
    controllers: [AlternativeController],
    providers: [AlternativeService],
})
export class AlternativeModule {}
