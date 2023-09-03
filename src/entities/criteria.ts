import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Decision } from './decision';

@Entity()
export class Criteria {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    weight: number;
    @ManyToOne(() => Decision, decision => decision.criterias,{ onDelete: 'CASCADE', eager: true})
    decision:Decision;
}