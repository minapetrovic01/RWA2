import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { AlternativeService } from './alternative.service';
import { Alternative } from 'src/entities/alternative';
import { AlternativeDto } from 'src/entities/alternative.dto';

@Controller('alternative')
export class AlternativeController {
    constructor(private alternativeService: AlternativeService) {}
    @Get()
    async getAll():Promise<Alternative[]> {
        return await this.alternativeService.getAll();
    }
    @Get(':id')
    async getById(@Param('id',ParseIntPipe)id: number):Promise<Alternative> {
        return await this.alternativeService.getById(id);
    }
    @Post()
    async create(@Body() alternativeDto: AlternativeDto, @Query('decisionId') decisionId: number):Promise<Alternative> {
        return await this.alternativeService.create(alternativeDto, decisionId);
    }
}
