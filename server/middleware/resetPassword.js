const express=require('express');
const router=express.Router();

router.post('/login/forgotPassword/resetPassword', (req, res)=>{

    let referringURL=req.headers.referer;

    let userInfo=referringURL.split('?')[1].split('=')

    let user=userInfo[1].split('&')[0];

    let token=userInfo[2];
})
module.exports=router;
