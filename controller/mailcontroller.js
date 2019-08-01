let nodemailer = require('nodemailer');

module.exports.mailGet = (req,res)=>{
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pusheenns04@gmail.com',
      pass: '<html>1</html>'
    }
  });

  transporter.verify(function (error, success) {

    if (error) throw error;

    console.log('Bağlantı başarıyla sağlandı');

  });
  res.render('mailgonder');
}
module.exports.mailPost = (req,res)=>{

module.exports.mailgonder = function(){


  function gonder(){
    let bilgiler = {
      from: 'Görüş Bildirme<pusheenns04@gmail.com>',
      to: 'pusheenns04@gmail.com',
      subject: req.body.konu,
      text: req.body.detaylar
    };

  transporter.sendMail(bilgiler, function (error, info) {

    if (error) throw error;

    console.log('Eposta gönderildi ' + info.response);

  });
}}
mailgonder();
  let pagemessage = {
    message: 'Görüşünüz bildirildi.'
  }
  res.render('mailgonder',pagemessage);
};
