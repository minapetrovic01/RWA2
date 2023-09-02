import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Alternative } from "./alternative";
import { Criteria } from "./criteria";
import { User } from "./user";

@Entity()
export class Decision {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    date: Date;
    @OneToMany(() => Alternative, alternative => alternative.decision,{ onDelete: 'CASCADE'})
    alternatives: Alternative[];
    @OneToMany(() => Criteria, criteria => criteria.decision,{ onDelete: 'CASCADE'})
    criterias: Criteria[];
    @ManyToOne(() => User, user => user.decisions,{ onDelete: 'CASCADE', eager: true})
    owner:User;
}