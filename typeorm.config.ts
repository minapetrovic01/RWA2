import { ConnectionOptions } from "typeorm";


export const typeOrmConfig: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    entities: [],
    synchronize: true,
}
    