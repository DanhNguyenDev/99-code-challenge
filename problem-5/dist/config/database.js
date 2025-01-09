"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_model_1 = require("../model/user.model");
const config_1 = require("./config");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: config_1.ConfigApp.POSTGRES_HOST,
    port: 15432,
    username: config_1.ConfigApp.POSTGRES_USER,
    password: config_1.ConfigApp.POSTGRES_PASSWORD,
    database: config_1.ConfigApp.POSTGRES_DB,
    synchronize: false,
    logging: true,
    entities: [user_model_1.User],
    // Your Migration path
    migrations: [__dirname + "/../migrations/*.{ts,js}"], // Đường dẫn tới migrations
    migrationsTableName: "migrations",
    migrationsRun: true,
    subscribers: [],
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected successfully!");
})
    .catch((error) => console.log("Database connection failed: ", error));
