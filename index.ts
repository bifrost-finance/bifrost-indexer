import Indexer from '@orml/indexer';
import dotenv from 'dotenv';
import { types as bifrostTypes } from '@bifrost-network/types';

dotenv.config();

const run = async (): Promise<void> => {
  const dbUrl = process.env.DB_URI as string;
  const wsUrl = process.env.WS_URL as string;
  const indexer = await Indexer.create({ dbUrl, wsUrl, types: bifrostTypes, sync: true });
  await indexer.start();
};

run().catch((err) => {
  console.error(err);
});
