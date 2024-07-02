import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Test } from "../database/entities/test.entity";
import { SeederOptions } from "typeorm-extension";

const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [Test],
  migrations: [],
  subscribers: [],
  seeds: ["src/database/seeds/**/*{.ts,.js}"],
  factories: ["src/database/factories/**/*{.ts,.js}"],
};

export const AppDataSource = new DataSource(options);
