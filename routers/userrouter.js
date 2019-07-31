let express = require('express');
let userRouter = express.Router();

userRouter.use('/',(req,res,next)=>{

if(req.cookies['mycookie'] != undefined){
  console.log(req.cookies['mycookie']);
  next();
}else{
  return res.redirect('/login');
};
});

userRouter.get('/',(req,res)=>{
  res.send('user var');
});

userRouter.get('/kayit',(req,res)=>{
  res.send('kayit ekranı');
});

module.exports = userRouter;
