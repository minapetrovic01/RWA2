import { Body, Inject, Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DecisionService } from 'src/decision/decision.service';
import { Alternative } from 'src/entities/alternative';
import { AlternativeDto } from 'src/entities/alternative.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AlternativeService {
    constructor(
        @InjectRepository(Alternative) private alternativeRepository: Repository<Alternative>,
        private decisionService: DecisionService,
    ) {}

   async getAll():Promise<Alternative[]>{
        return await this.alternativeRepository.find();
    }
    async getById(id:number):Promise<Alternative>{
        return await this.alternativeRepository.findOne({
                where: {id},
                relations:['decision']
            }
        );
    }
    async create(alternativeDto:AlternativeDto,decisionId:number):Promise<Alternative>{
        const alternative = new Alternative();
        alternative.name = alternativeDto.name;
        alternative.percentage = alternativeDto.percentage;
        alternative.decision =  await this.decisionService.getById(decisionId);
        return  await this.alternativeRepository.save(alternative); 
    }
    async update(id:number,alternativeDto:AlternativeDto):Promise<Alternative>{
        const alternative = await this.alternativeRepository.findOne({
            where: {id},
        });
        alternative.name = alternativeDto.name;
        alternative.percentage = alternativeDto.percentage;
        return await this.alternativeRepository.save(alternative);
    }
    async delete(id:number):Promise<Alternative>{
        const alternative = await this.alternativeRepository.findOne({
            where: {id},
        });
        return await this.alternativeRepository.remove(alternative);
    }
}
