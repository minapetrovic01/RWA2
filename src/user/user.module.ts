import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user';
import { SubscriptionModule } from 'src/subscription/subscription.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';

@Module({
    imports: [TypeOrmModule.forFeature([User]), 
    SubscriptionModule,
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '1h' },
    })    
],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
