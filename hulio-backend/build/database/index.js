"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Pool } = require('pg');
require('dotenv').config({ path: '../.env' });
const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT } = process.env;
const devConfig = {
    user: PGUSER,
    //password: PGPASSWORD,
    host: PGHOST,
    database: PGDATABASE,
    port: PGPORT,
};
const proConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
};
const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);
exports.default = pool;
