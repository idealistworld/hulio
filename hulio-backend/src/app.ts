import express, {Request, Response} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import websiteRouter from './routes/website.routes'

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

// Create the Express application
let app = express();
const port = process.env.PORT || 8000;

// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());
let cookieMiddleware = cookieParser();
app.use(cookieMiddleware());

// ROUTES
app.use('/api/website', websiteRouter);


// HEALTH CHECKER
app.get('/api/healthChecker', async (_, res: Response) => {
    res.status(200).json({
      status: 'success'
    });
  });


app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
});