import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Subscription {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => User, user => user.subscribers, { onDelete: 'CASCADE',eager:true })
    subscribee: User;
    @ManyToOne(() => User, user => user.subscriptions, { onDelete: 'CASCADE', eager:true })
    subscriber: User;

}