import { Body, Controller, Post, Get, Delete, ParseIntPipe, Param } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { Subscription } from 'src/entities/subscription';

@Controller('subscription')
export class SubscriptionController {
    constructor(private subscriptionService: SubscriptionService) { }

    @Post()
    create(@Body() subscription: Subscription): Promise<Subscription> {
        return this.subscriptionService.create(subscription);
    }

    @Get()
    findAll(): Promise<Subscription[]> {
        return this.subscriptionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<Subscription> {
        return this.subscriptionService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.subscriptionService.delete(parseInt(id));
    }
}