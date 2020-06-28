// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { connectDb } from '../src/db';
import { listings } from './seed_listings';

const seed = async () => {
  try {
    console.log('[seed] : is running...');

    const db = await connectDb();

    await db.listings.insertMany(listings);

    console.log('[seed] : success');
  } catch (error) {
    throw new Error(`failed to seed database: ${error}`);
  }
};

seed();
