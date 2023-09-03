import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user';
import { UserDto } from 'src/entities/user.dto';
import { SubscriptionService } from 'src/subscription/subscription.service';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private subscriptionService: SubscriptionService,
    ) {}

    async getAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
    async getById(id: number): Promise<User> {
        return await this.userRepository.findOne({
            where: { id },
            //relations: ['subscription'],
        });
    }
    async create(user: UserDto): Promise<User> {
        const newUser = new User();
        newUser.name = user.name;
        newUser.surname = user.surname;
        newUser.username = user.username;
        newUser.email = user.email;
        newUser.password = user.password;
        newUser.job = user.job;
        return await this.userRepository.save(newUser);
    }
    async update(id: number, user: UserDto): Promise<User> {
        const newUser = await this.userRepository.findOne({
            where: { id },
        });
        newUser.name = user.name;
        newUser.surname = user.surname;
        newUser.username = user.username;
        newUser.email = user.email;
        newUser.password = user.password;
        newUser.job = user.job;
        return await this.userRepository.save(newUser);
    }
    async delete(id: number): Promise<User> {
        const user = await this.userRepository.findOne({
            where: { id },
        });
        return await this.userRepository.remove(user);
    }
    

}
