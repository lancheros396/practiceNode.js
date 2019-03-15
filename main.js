

//widdlewares 

const express = require( "express");
const appServer = express();
const path = require("path");
const morgan = require("morgan");
const static = require("static");

const routes = require('./routes/index')

const bodyParser = require("body-parser")
const routes = require('./routes/index')
//const routes = require("./routes/index");


appServer.set('port', process.env.port||3000)
appServer.set(path.join(__dirname, 'views'))
appServer.set('view engine','ejs')
appServer.set('appName', "suramericaApps")

appServer .use((req,res,next)=>{
    console.log(`urlRequerida:${req.url} -metodoRequerido:${req.method}`);
   next() 
})

appServer .use(morgan('combined'));
a
appServer .use(bodyParser.urlencoded({extend:true}));cd
appServer .use(bodyParsaer.json());



//appServer.use("routes");

appServer .use(express.static(path.join(__dirname, 'public')));

appServer.listen(appServer.get('port'),()=>{
    console.log(`listened on port ${appServer.get('port')} +${appServer.get('appName')}`)
});