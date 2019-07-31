const jwt = require('jsonwebtoken');
const KullaniciModel = require('../model/kmodel');

module.exports.loginGet = (req,res)=>{
  let pageMessage = {
    title: 'Login',
    layout: 'loginlayout.handlebars'

  }
  res.render('login',pageMessage);
}

module.exports.loginPost = (req,res)=>{
//veritabanı kontrolü yapılacak...

//db.getCollection('myKullanici').find({kullaniciad:'meryem.balcii',sifre: 'meryem123'})

KullaniciModel.findOne({kullaniciad:req.body.kullaniciad,sifre: req.body.sifre}, function (err, user){


    if(err){
        let pageMessage = {
          title: 'Login',
          message: `login hatası oldu ${err}`,
          layout: 'loginlayout.handlebars'
        }
        return render('login',pageMessage);
    }

    try {
        console.log(user.ad);
    } catch (e) {

        console.log('user gelmedi');

        let pageMessage = {
          title: 'Login',
          message: `login hatası oldu ${err}`,
          layout: 'loginlayout.handlebars'
        }
        return res.render('login',pageMessage);

    }


     const payload = {
         kullaniciadi:user.kullaniciad,
         ad:user.ad,
         soyad:user.soyad,
         ip:'127.0.0.1'
     };
    //let payload = JSON.stringify(user);
    const token = jwt.sign(payload, req.app.get('api_secret_key'), {
        expiresIn: 84600
    });
     res.cookie('adisoyadi',user.ad + ' ' +user.soyad);
     res.cookie('x-acsess-token',token);
      let pageMessage = {
        title: 'Login',
        message: 'Login ollllll'

      }
      return res.render('home',pageMessage);


});



}
