import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { DecisionService } from './decision.service';
import { Decision } from 'src/entities/decision';
import { DecisionDto } from 'src/entities/decision.dto';

@Controller('decision')
export class DecisionController {
    constructor(private decisionService: DecisionService) {}

    @Get()
    async getAll():Promise<Decision[]> {
        return await this.decisionService.getAll();
    }
    @Get(':id')
    async getById(@Param('id',ParseIntPipe)id: number):Promise<Decision> {
        return await this.decisionService.getById(id);
    }
    @Get('/alternativeName/:name')
    async getByNameOfAlternative(@Param('name')name: string):Promise<Decision[]> {
        return await this.decisionService.getByNameOfAlternative(name);
    }
    @Post()
    async create(@Body() decisionDto: DecisionDto, @Query('userId') userId: number):Promise<Decision> {
        return await this.decisionService.create(decisionDto, userId);
    }
    @Delete(':id')
    async delete(@Param('id',ParseIntPipe)id: number):Promise<Decision> {
        return await this.decisionService.delete(id);
    }
    @Put(':id')
    async update(@Param('id',ParseIntPipe)id: number, @Body() decisionDto: DecisionDto):Promise<Decision> {
        return await this.decisionService.update(id, decisionDto);
    }
}
