const express=require("express");
const app = express();
const bodyParser =require("body-parser");
const market=require("./market/products");
const mysqlconnection=require("./connection");
app.use("/product",market);

app.use(bodyParser.json())
app.listen(5000, ()=>{
    console.log("server running on localhost:5000...");
});

var mysqlConnection =mysql.createconnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"my180_market"
});

mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("connection failed");
    }
    else
    {
       console.log("connection failed");
    }
}
)

app.get("/market/products",(request, response)=>{
  Pool.query(
    "insert into (thecaamp_market) values (1,'pepsi',5,20,21/2/2022)",
     function(err,result,fields){
        if (err) response.status(404).send("error")
        response.send(result);
     }
  );
});


app.post("/teams",(request, response)=>{

})