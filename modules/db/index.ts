import * as config from "config";
const env = config.get<string>("environment");

const knexConfig: any = require("../../knexfile")[env];

import * as knexModule from "knex";

export type Knex = knexModule;
const knex: typeof knexModule = require("knex");

/** The currently open connection. Set by getConnection and destroyConnection */
let $connection: knexModule | undefined = undefined;

export async function destroyConnection() {
  if ($connection) {
    await $connection.destroy();
    $connection = undefined;
  }
}

export function getConnection() {
  if (!$connection) {
    // var mysqlTypes = require("mysql").types;
    // mysqlTypes.setTypeParser(1082, (val: string) => val);

    $connection = knex(knexConfig);
  }
  return <knexModule>$connection;
}

export function _setConnection(knex: Knex) {
  $connection = knex;
}

export async function truncateAll(knex: Knex) {
  // const result = await knex.raw(`
  //     SELECT table_name
  //     FROM information_schema.tables
  //  `);
  // console.info(result)
  // const tables: string[] = result[0].map((r: any) => r.TABLE_NAME);
  // console.info(tables)
  // const recordTables = tables.filter(t => !t.includes("knex"));
  // const escapedTableNameList = tables.map(n => `TRUNCATE TABLE ${n}; `).join("");
  // await knex.raw(`${escapedTableNameList}`);
  return;
}
