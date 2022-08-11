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
exports.deleteWebsite = exports.updateWebsite = exports.createWebsite = exports.getWebsite = exports.getWebsites = void 0;
const database_1 = __importDefault(require("../../database"));
const verifyWebsite_1 = __importDefault(require("../utils/verifyWebsite"));
const getWebsites = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield database_1.default.query('SELECT * FROM website');
        res.status(200).json({
            status: 'success',
            result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getWebsites = getWebsites;
const getWebsite = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield database_1.default.query('SELECT * FROM website WHERE url=$1', [req.params.url]);
        res.status(200).json({
            status: 'success',
            result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getWebsite = getWebsite;
const createWebsite = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { url, tx_hash } = req.body;
        const verified = yield (0, verifyWebsite_1.default)(url, tx_hash);
        if (verified) {
            let result = yield database_1.default.query('INSERT INTO website (url, tx_hash, verified) VALUES ($1, $2, $3)', [url, tx_hash, true]);
            res.status(200).json({
                status: 'success',
                result
            });
        }
        else {
            res.status(500).json({
                status: 'invalid',
                url
            });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.createWebsite = createWebsite;
const updateWebsite = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { url, tx_hash } = req.body;
        const verified = yield (0, verifyWebsite_1.default)(url, tx_hash);
        if (verified) {
            let result = yield database_1.default.query('UPDATE website SET tx_hash=$1 WHERE url=$2', [tx_hash, url]);
            res.status(200).json({
                status: 'success',
                result
            });
        }
        else {
            res.status(500).json({
                status: 'invalid',
                url
            });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.updateWebsite = updateWebsite;
const deleteWebsite = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield database_1.default.query('DELETE FROM website WHERE url=$1', [req.params.url]);
        res.status(200).json({
            status: 'success',
            result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteWebsite = deleteWebsite;
