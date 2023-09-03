import { Module } from '@nestjs/common';
import { CriteriaController } from './criteria.controller';
import { CriteriaService } from './criteria.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Criteria } from 'src/entities/criteria';
import { DecisionModule } from 'src/decision/decision.module';

@Module({
    imports: [TypeOrmModule.forFeature([Criteria]),DecisionModule],
    controllers: [CriteriaController],
    providers: [CriteriaService],
})
export class CriteriaModule {}
