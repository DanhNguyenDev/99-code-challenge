import { MigrationInterface, QueryRunner } from 'typeorm'

export class Testing1733824588833 implements MigrationInterface {
  name = 'Testing1733824588833'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
      CREATE TABLE IF NOT EXISTS "users" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "name" text DEFAULT NULL,
        "active" boolean NOT NULL DEFAULT false, 
        CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
        )`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`)
  }
}
