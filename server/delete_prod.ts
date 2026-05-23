import { db } from './db.ts';
import { products } from './schema.ts';
import { eq } from 'drizzle-orm';

async function run() {
  console.log('Deleting Local 232...');
  try {
    await db.delete(products).where(eq(products.name, 'Local 232'));
    console.log('Deleted successfully.');
  } catch (e) {
    console.error(e);
  }
  process.exit(0);
}

run();
