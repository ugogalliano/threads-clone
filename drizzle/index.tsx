import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

import * as schema from './schema/schema';

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

// eslint-disable-next-line no-console
console.log('DRIZZLE IS CONNECTED');

export const db = drizzle(client, { schema });
