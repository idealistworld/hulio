import express, {NextFunction, Request, Response} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import AppError from './utils/appError';

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


// UNHANDLED ROUTE
app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new AppError(404, `Route ${req.originalUrl} not found`));
});


// GLOBAL ERROR HANDLER
app.use(
    (error: AppError, req: Request, res: Response, next: NextFunction) => {
        error.status = error.status || 'error';
        error.statusCode = error.statusCode || 500;

        res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
        });
    }
);
  


app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
});