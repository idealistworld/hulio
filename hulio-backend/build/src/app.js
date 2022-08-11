"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const appError_1 = __importDefault(require("./utils/appError"));
const website_routes_1 = __importDefault(require("./routes/website.routes"));
// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();
// Create the Express application
let app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
// let cookieMiddleware = cookieParser();
// app.use(cookieMiddleware());
// ROUTES
app.use('/api/website', website_routes_1.default);
// HEALTH CHECKER
app.get('/api/healthChecker', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({
        status: 'success'
    });
}));
// UNHANDLED ROUTE
app.all('*', (req, res, next) => {
    next(new appError_1.default(404, `Route ${req.originalUrl} not found`));
});
// GLOBAL ERROR HANDLER
app.use((error, req, res, next) => {
    error.status = error.status || 'error';
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
    });
});
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
