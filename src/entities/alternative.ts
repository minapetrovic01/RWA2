import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Decision } from "./decision";

@Entity()
export class Alternative {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    percentage: number;
    @ManyToOne(() => Decision, decision => decision.alternatives,{ onDelete: 'CASCADE', eager: true})
    decision: Decision;
}