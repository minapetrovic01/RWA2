import { Module } from '@nestjs/common';
import { DecisionController } from './decision.controller';
import { DecisionService } from './decision.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Decision } from 'src/entities/decision';

@Module({
    imports: [TypeOrmModule.forFeature([Decision])],
    controllers: [DecisionController],
    providers: [DecisionService],
})
export class DecisionModule {}
