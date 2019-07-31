const kullaniciModel = require('../model/kmodel');

module.exports.registerGet = (req,res)=>{
    let pageMessage = {
      title: 'Register',
      layout: 'registerlayout.handlebars'
    }
  res.render('register',pageMessage);
};


module.exports.registerPost = (req,res)=>{

  let myK = new kullaniciModel({
  ad: req.body.ad,
  soyad: req.body.soyad,
  kullaniciad: req.body.kullaniciad,
  sifre: req.body.sifre
});

myK.save().then((result) => {
  console.log('başardın.' + result);
  let pageMessage = {
    title: 'Register',
    layout: 'registerlayout.handlebars',
    message: 'Register oldunuz'
  }
res.render('register',pageMessage);

}).catch((error) => {
  console.log('başaramadın :( ' + error);
  let pageMessage = {
    title: 'Register',
    layout: 'registerlayout.handlebars',
    message: `Register işleminde hata oldu ${error}`
  }
res.render('register',pageMessage);
});



};
