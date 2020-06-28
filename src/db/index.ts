import { MongoClient } from 'mongodb';
import { Database } from './index.d';

const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const db_name = process.env.DB_NAME;

const url = `mongodb://${dbuser}:${dbpassword}@${db_host}:${db_port}/${db_name}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const connectDb = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, options);
  const db = client.db();

  return {
    listings: db.collection('listings'),
  };
};
