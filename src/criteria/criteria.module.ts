import { Module } from '@nestjs/common';
import { CriteriaController } from './criteria.controller';
import { CriteriaService } from './criteria.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Criteria } from 'src/entities/criteria';

@Module({
    imports: [TypeOrmModule.forFeature([Criteria])],
    controllers: [CriteriaController],
    providers: [CriteriaService],
})
export class CriteriaModule {}
