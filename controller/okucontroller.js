module.exports.okuGet = (req,res)=>{

  let cookiem = req.cookies['mycookie'];
  res.clearCookie('mycookie');

  res.send(cookiem);
}
