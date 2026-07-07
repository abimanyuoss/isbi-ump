import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

async function migrate() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 4000,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true,
    },
  });
  
  try {
    console.log('Adding file_proposal column to pendaftaran table...');
    await connection.query('ALTER TABLE pendaftaran ADD COLUMN file_proposal VARCHAR(500)');
    console.log('✅ Column file_proposal added successfully!');
  } catch (err: any) {
    if (err.message?.includes('Duplicate column')) {
      console.log('ℹ️ Column file_proposal already exists. No changes needed.');
    } else {
      console.error('❌ Error:', err.message);
      throw err;
    }
  } finally {
    await connection.end();
  }
}

migrate();
