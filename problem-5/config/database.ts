import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../model/user.model";
import { ConfigApp } from "./config";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: ConfigApp.POSTGRES_HOST,
  port: ConfigApp.POSTGRES_PORT,
  username: ConfigApp.POSTGRES_USER,
  password: ConfigApp.POSTGRES_PASSWORD,
  database: ConfigApp.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: [User],
  // Your Migration path
  migrations: [__dirname + "/../migrations/*.{ts,js}"], // Đường dẫn tới migrations

  migrationsTableName: "migrations",
  migrationsRun: true,
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((error) => console.log("Database connection failed: ", error));
