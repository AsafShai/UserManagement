
require('dotenv').config();

export const PORT = process.env.APP_PORT || 8000;
export const MONGO_HOST = process.env.MONGO_HOST || "127.0.0.1"
export const MONGO_PORT = process.env.MONGO_PORT || 27017;