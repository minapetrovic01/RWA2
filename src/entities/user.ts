import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Decision } from "./decision";
import { Subscription } from "./subscription";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    name: string;
    @Column()
    surname: string;
    @Column()   
    email: string;
    @Column()
    password: string;
    @Column()
    job: string;
    @OneToMany(() => Decision, decision => decision.owner,{ onDelete: 'CASCADE'})
    decisions: Decision[];
    @OneToMany(() => Subscription, subscription => subscription.subscriber,{ onDelete: 'CASCADE'})
    subscriptions: Subscription[];
    @OneToMany(() => Subscription, subscription => subscription.subscribee,{ onDelete: 'CASCADE'})
    subscribers: Subscription[];
}