import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscription } from 'src/entities/subscription';

@Module({
    imports: [TypeOrmModule.forFeature([Subscription])],
    controllers: [SubscriptionController],
    providers: [SubscriptionService],
    exports: [SubscriptionService],
})
export class SubscriptionModule {}
