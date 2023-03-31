import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    username: 'postgres',
    host: 'localhost',
    database: 'clothes_shop_bd',
    password: 'p.ufaf',
    port: 5432,
    type: "postgres",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
