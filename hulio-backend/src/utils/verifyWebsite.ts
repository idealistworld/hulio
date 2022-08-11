import * as web3 from '@solana/web3.js';
require('dotenv').config();

console.log('web3js started')

let connection:any = null;

if(process.env.ENDPOINT){
    let endpoint = process.env.ENDPOINT
    connection = new web3.Connection(endpoint);
}



const verifyWebsite = async(url:string, transaction:string): Promise<boolean> =>{
    if(connection === null){
        console.log('connection error')
        return false
    }
    const information = await connection.getTransaction(transaction)
    console.log(information)
    if(information?.meta?.logMessages){
        if(information.meta.logMessages[2].includes(url)){
            return true
        }
        else {
            return false
        }
    }
    return false
}

export default verifyWebsite