const cors=require('cors');
const mysql=require('mysql');
const app=require('express')();
const bodyParser=require('body-parser');

app.use(cors()); // enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // if you will be sending data in json format

const port='8090'; // port number for server to run
const connection=mysql.createConnection({
                 host:'localhost',
                 database:'mysql-db',
                 user:'mysql-username',
                 password:'mysql-password'
               }) 
// check https://www.npmjs.com/package/mysql

//get method
app.get('/',(req,res)=>{
    res.status(200).send('Restaurant server is up and running... !');
})

//post method
app.post('/getUser',(req,res)=>{
    console.log(req.body);  //data passed as body
    connection.query(`select id from user`,(err,result,fields)=>{
        if(err) res.status(400).send(err);
        else res.status(200).send(result);
    })
})

//to start a server
app.listen(port,()=>{
    console.log(`Server is running in ${port}..`);
})