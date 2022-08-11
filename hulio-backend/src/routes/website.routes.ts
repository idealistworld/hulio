import express from 'express';

import {
    getWebsites,
    getWebsite,
    createWebsite,
    updateWebsite,
    deleteWebsite
} from '../controllers/website.controller'

const router = express.Router();


/**
  * Get all website data
*/
router.get('/get_websites', getWebsites);

/**
  * Get website data
  * @param  {string}  url  the url of the website
*/
router.get('/get_website/:url', getWebsite);

/**
  * Add website data
  * @body {string url, string tx_hash}
*/
router.post('/create_website', createWebsite);

/**
  * Update website tx_hash
  * @body {string url, string tx_hash}
*/
router.put('/update_website', updateWebsite);

/**
  * Delete website data
  * @param  {string}  url  the url of the website
*/
router.delete('/delete_website/:url', deleteWebsite);

export default router;