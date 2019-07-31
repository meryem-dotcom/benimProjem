module.exports.homeGet = (req,res)=>{

    let pageMessage = {
      title: 'Home',
      kullanici:'meryem balcı'
    }
  res.render('home',pageMessage);
}
module.exports.homePost = (req,res)=>{
  res.render('home');
}
