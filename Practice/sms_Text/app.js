const bodyParser = require('body-parser');
const ejs=require('ejs');
const Nexmo=require('nexmo');
const socketio=require('socket.io');
const express=require('express');
// const { default: Nexmo } = require('nexmo');

const nexmo=new Nexmo({
    apikey:'',
    apiSecret:''
},{debug:true});


const app=express();

app.set('view engine','html');
app.engine('html',ejs.renderFile);
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('index');
    // res.send("hu");
});
app.post('/',(req,res)=>{
   const number=req.body.number;
   const text=req.body.text;
   nexmo.message.sendSms(
    '',number,text,{type:'unicode'},
    (err,responseData)=>{
        if(err)
            console.log(err);
        else{
            console.dir(responseData);
            const data={
                id:responseData.messages[0]['message-id'],
                number:responseData.messages[0]['to']
            }
            io.emit('smsStatus',data);
        }
    }
   );
})
const port=3000;
const server=app.listen(port,()=>console.log("Server Started!"));

const io=socketio(server);

io.on('connection',(socket)=>{
    console.log("connected");
    io.on('disconnect',()=>{
        console.log("disconnected");
    })
})

