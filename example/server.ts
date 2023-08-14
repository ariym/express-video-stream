import express, { Express, Request, Response } from 'express';
import path from 'path'
import stream from '../src/express-stream'
import cors from 'cors';
import bodyParser from 'body-parser';


// environment variables
require('dotenv').config({path: '.env'});
const {IP, PORT} = process.env;


// for use in subfolders
global.__basedir = __dirname;


const app: Express = express();


// pre route middleware
app.use(cors());
app.use(bodyParser.json());


// routes

// Webpage
app.get('/', async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});

// Chunk Streaming
app.get("/stream", stream);






// run the server
app.listen(
  Number(PORT),
  IP,
  () => console.table({
    "Environment": process.env.NODE_ENV,
    "IP": IP,
    "Port": PORT,
  })
);