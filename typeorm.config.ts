import { Alternative } from "src/entities/alternative";
import { Criteria } from "src/entities/criteria";
import { Decision } from "src/entities/decision";
import { Subscription } from "src/entities/subscription";
import { User } from "src/entities/user";
import { ConnectionOptions } from "typeorm";


export const typeOrmConfig: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'platform',
    entities: [Alternative,Criteria,Decision,Subscription,User],
    synchronize: true,
}
    