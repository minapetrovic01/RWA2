import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Decision } from 'src/entities/decision';
import { DecisionDto } from 'src/entities/decision.dto';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class DecisionService {
    constructor(
        @InjectRepository(Decision) private decisionRepository: Repository<Decision>,
        private userService: UserService,
    ) {}
    async getAll(): Promise<Decision[]> {
        return await this.decisionRepository.find();
    }
    async getById(id: number): Promise<Decision> {
        return await this.decisionRepository.findOne({
            where: { id },
            relations: ['alternatives'],
        });
    }
    async create(decision: DecisionDto, userId:number): Promise<Decision> {
        const newDecision = new Decision();
        newDecision.name = decision.name;
        newDecision.description = decision.description;
        newDecision.owner=await this.userService.getById(userId);
        newDecision.date = new Date();
        return await this.decisionRepository.save(newDecision);
    }
    async update(id: number, decision: DecisionDto): Promise<Decision> {
        const newDecision = await this.decisionRepository.findOne({
            where: { id },
        });
        newDecision.name = decision.name;
        newDecision.description = decision.description;
        return await this.decisionRepository.save(newDecision);
    }
    async delete(id: number): Promise<Decision> {
        const decision = await this.decisionRepository.findOne({
            where: { id },
        });
        return await this.decisionRepository.remove(decision);
    }


}
