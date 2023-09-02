import { Module } from '@nestjs/common';
import { DecisionController } from './decision.controller';
import { DecisionService } from './decision.service';

@Module({
    imports: [],
    controllers: [DecisionController],
    providers: [DecisionService],
})
export class DecisionModule {}
