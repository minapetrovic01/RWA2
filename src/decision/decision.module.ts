import { Module } from '@nestjs/common';
import { DecisionController } from './decision.controller';
import { DecisionService } from './decision.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Decision } from 'src/entities/decision';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([Decision]),UserModule],
    controllers: [DecisionController],
    providers: [DecisionService],
    exports: [DecisionService],
})
export class DecisionModule {}
