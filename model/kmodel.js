const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  ad: String,
  soyad: String,
  kullaniciad: {type: String,required: true,unique: true},
  sifre: {type: String,required: true}
},{collection: 'myKullanici'});

const kullanicimodel = mongoose.model('kullanici',mySchema);

module.exports = kullanicimodel;
