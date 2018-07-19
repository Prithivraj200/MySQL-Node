const cors=require('cors');
const mysql=require('mysql');
const app=require('express')();
const bodyParser=require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const port='8090';
const connection=mysql.createConnection({
                 host:'localhost',
                 database:'mysql-db',
                 user:'mysql-username',
                 password:'mysql-password'
               })

app.get('/',(req,res)=>{
    res.status(200).send('Restaurant server is up and running... !');
})

app.post('/getUser',(req,res)=>{
    console.log(req.body);  //data passed as body
    connection.query(`select id from user`,(err,result,fields)=>{
        if(err) res.status(400).send(err);
        else res.status(200).send(result);
    })
})

app.listen(port,()=>{
    console.log(`Server is running in ${port}..`);
})