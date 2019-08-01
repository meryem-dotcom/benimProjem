let express = require('express');
let bodyParser = require('body-parser');
let exphbs = require('express-handlebars');
let mydbConnection =  require('./model/mydb');
let loginRouter = require('./routers/loginrouter');
let cookieParser = require('cookie-parser');
let userRouter = require('./routers/userrouter');
let homeRouter = require('./routers/homerouter');
let okuRouter = require('./routers/okurouter');
let registerRouter = require('./routers/registerrouter');
let mailRouter = require('./routers/mailrouter');
let hakkimdaRouter = require('./routers/hakkimdarouter');

const config = require('./config');
const app = express();

app.use('/public', express.static('public'));

app.engine('handlebars', exphbs({defaultLayout:'main.handlebars'}));
app.set('view engine', 'handlebars');

app.set('api_secret_key',config.api_secret_key);

app.use(bodyParser.urlencoded({  extended: false}));
app.use(cookieParser());

app.use('/user',userRouter);

app.use('/',homeRouter)

app.use('/oku',okuRouter);

app.use('/login',loginRouter);

app.use('/register',registerRouter);

app.use('/',homeRouter);

app.use('/mailyaz',mailRouter);

app.use('/hakkimda',hakkimdaRouter);

app.use((req,res)=>{
  res.send('sayfa yok');
});

app.listen(5421,()=>{
  console.log('localhost:5421');
});
