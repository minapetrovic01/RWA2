import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DecisionService } from 'src/decision/decision.service';
import { Criteria } from 'src/entities/criteria';
import { CriteriaDto } from 'src/entities/criteria.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CriteriaService {
    constructor(
        @InjectRepository(Criteria) private criteriaRepository: Repository<Criteria>,
        private decisionService: DecisionService,
    ) {}
    async getAll(): Promise<Criteria[]> {
        return await this.criteriaRepository.find();
    }
    async getById(id: number): Promise<Criteria> {
        return await this.criteriaRepository.findOne({
            where: { id },
            //relations: ['decision'],
        });
    }
    async create(criteria: CriteriaDto,userId:number): Promise<Criteria> {
        const newCriteria = new Criteria();
        newCriteria.name = criteria.name;
        newCriteria.weight = criteria.weight;
        newCriteria.decision = await this.decisionService.getById(userId);
        return await this.criteriaRepository.save(newCriteria);
    }
    async update(id: number, criteria: CriteriaDto): Promise<Criteria> {
        const newCriteria = await this.criteriaRepository.findOne({
            where: { id },
        });
        newCriteria.name = criteria.name;
        newCriteria.weight = criteria.weight;
        return await this.criteriaRepository.save(newCriteria);
    }
    async delete(id: number): Promise<Criteria> {
        const criteria = await this.criteriaRepository.findOne({
            where: { id },
        });
        return await this.criteriaRepository.remove(criteria);
    }

}
