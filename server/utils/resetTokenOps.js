const crypto=require('crypto');
const {algorithm, security_key,iv}=require('../env-config');

let encryptToken=(token)=>{

    const cipher=crypto.createCipheriv(algorithm, security_key, iv);

    let encryptedToken=cipher.update(token, 'utf-8', 'hex');

    encryptedToken+=cipher.final('hex');

    return (encryptedToken);
}

module.exports=encryptToken;





