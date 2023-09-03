import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user';
import { SubscriptionModule } from 'src/subscription/subscription.module';

@Module({
    imports: [TypeOrmModule.forFeature([User]), SubscriptionModule],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
