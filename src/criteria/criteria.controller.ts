import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { CriteriaService } from './criteria.service';
import { Criteria } from 'src/entities/criteria';
import { CriteriaDto } from 'src/entities/criteria.dto';

@Controller('criteria')
export class CriteriaController {
    constructor(private criteriaService: CriteriaService) {}

    @Get()
    async getAll():Promise<Criteria[]> {
        return await this.criteriaService.getAll();
    }

    @Get(':id')
    async getById(@Param('id',ParseIntPipe)id: number):Promise<Criteria> {
        return await this.criteriaService.getById(id);
    }

    @Post()
    async create(@Body() criteriaDto: CriteriaDto, @Query('decisionId') decisionId: number):Promise<Criteria> {
        return await this.criteriaService.create(criteriaDto, decisionId);
    }

}
