import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscription } from 'src/entities/subscription';
import { Repository } from 'typeorm';

@Injectable()
export class SubscriptionService {
    constructor(
        @InjectRepository(Subscription) private subscriptionRepository: Repository<Subscription>,
    ) {}

    async findAll(): Promise<Subscription[]> {
        return await this.subscriptionRepository.find();
    }

    async findOne(id: number): Promise<Subscription> {
        return await this.subscriptionRepository.findOneBy({id});
    }

    async create(subscription: Subscription): Promise<Subscription> {
        return await this.subscriptionRepository.save(subscription);
    }

    async delete(id: number): Promise<void> {
        await this.subscriptionRepository.delete(id);
    }

    async findOneBySubscriberIdAndSubscribedToId(subscriberId: number, subscribedToId: number): Promise<Subscription> {
        return await this.subscriptionRepository.findOne({
            where:{
                subscriber: {id:subscriberId},
                subscribee: {id:subscribedToId}
            }
        });
    }
}
