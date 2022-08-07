import { Request, Response, NextFunction } from "express";
import pool from '../../database'

export const getWebsites = async (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    try{
        let result = await pool.query('SELECT * FROM website');
        res.status(200).json({
            status: 'success',
            result
        });

    } catch(err:any){
        next(err);
    }
}

export const getWebsite = async (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    try{
        let result = await pool.query('SELECT * FROM website WHERE url=$1', [req.params.url]);
        res.status(200).json({
            status: 'success',
            result
        });

    } catch(err:any){
        next(err);
    }
}

export const createWebsite = async (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    try{
        const {url, tx_hash} = req.body;
        let result = await pool.query('INSERT INTO website (url, tx_hash) VALUES ($1, $2)', [url, tx_hash]);
        res.status(200).json({
            status: 'success',
            result
        });

    } catch(err:any){
        next(err)
    }
}

export const updateWebsite = async (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    try{
        const {url, tx_hash} = req.body;
        let result = await pool.query('UPDATE website SET tx_hash=$1 WHERE url=$2', [tx_hash, url]);
        res.status(200).json({
            status: 'success',
            result
        });
        
    } catch(err:any){
        next(err)
    }
}

export const deleteWebsite = async (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    try{
        let result = await pool.query('DELETE FROM website WHERE url=$1', [req.params.url]);
        res.status(200).json({
            status: 'success',
            result
        });

    } catch(err:any){
        next(err)
    }
}