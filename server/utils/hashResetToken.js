const crypto=require('crypto');
const {algorithm, security_key,}=require('../env-config');

let encryptToken=(token)=>{

    const iv=crypto.randomBytes(16);

    const cipher=crypto.createCipheriv(algorithm, security_key, iv);

    let encryptedToken=cipher.update(token, 'utf-8', 'hex');

    encryptedToken+=cipher.final('hex');

    return (encryptedToken);
}

module.exports=encryptToken;





