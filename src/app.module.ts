import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeorm.config';
import { AlternativeModule } from './alternative/alternative.module';
import { CriteriaModule } from './criteria/criteria.module';
import { DecisionModule } from './decision/decision.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AlternativeModule, CriteriaModule, DecisionModule, SubscriptionModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
