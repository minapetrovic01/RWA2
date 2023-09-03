import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Decision } from 'src/entities/decision';
import { Repository } from 'typeorm';

@Injectable()
export class DecisionService {
    constructor(
        @InjectRepository(Decision) private decisionRepository: Repository<Decision>,
    ) {}
}
