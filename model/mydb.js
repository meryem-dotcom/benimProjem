const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost/users';

mongoose.Promise = require('bluebird');

mongoose.connect(mongoURL,{ useNewUrlParser: true },(err,db)=>{
  if(err){
    console.log('bağlanamadın >:('+err);
  }
  else{
    console.log('aferin');
  }
});
