import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Criteria } from 'src/entities/criteria';
import { Repository } from 'typeorm';

@Injectable()
export class CriteriaService {
    constructor(
        @InjectRepository(Criteria) private criteriaRepository: Repository<Criteria>,
    ) {}
}
