import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alternative } from 'src/entities/alternative';
import { Repository } from 'typeorm';

@Injectable()
export class AlternativeService {
    constructor(
        @InjectRepository(Alternative) private alternativeRepository: Repository<Alternative>,
    ) {}
}
