const crypto=require('crypto');
const {algorithm, security_key,iv}=require('../env-config');

let encryptToken=(token)=>{

    const cipher=crypto.createCipheriv(algorithm, security_key, iv);

    let encryptedToken=cipher.update(token, 'utf-8', 'hex');

    encryptedToken+=cipher.final('hex');

    return encryptedToken;
}

let decryptToken=(hashedToken)=>{

    const decipher=crypto.createDecipheriv(algorithm, security_key, iv);

    let decryptedToken=decipher.update(hashedToken, 'hex', 'utf-8');

    decryptedToken+=decipher.final('utf-8');

    return decryptedToken;
}

module.exports={
    encryptToken,
    decryptToken
};





