import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import HelloController from './controllers/hello-controller.js';
import UserController from './controllers/users/users-controller.js';
import TuitController from './controllers/tuits/tuits-controller.js';

dotenv.config();

const app = express();
const connectionString = process.env.DB_CONNECTION_STRING;

app.use(cors());
app.use(express.json());

mongoose.connect(connectionString);

TuitController(app);
HelloController(app);
UserController(app);

app.listen(4000);
