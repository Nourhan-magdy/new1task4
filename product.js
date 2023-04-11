const express =require("express");
const market =express.market();
const mysqlConnection =require("../connection");

market.get("/",(req,res)=>{
    mysqlConnection.query("select * from thecamp_market",
    function(err,rows,fields){
        if(err)
        {
            res.send(rows);  
        }
        else
        {
           console.log(err);
        }
    }
    )
})

module.expotrs= market;

market.post("/",(req,res)=>{
    Pool.query("insert into (thecaamp_market) values (1,'pepsi',5,20,21/2/2022)",
    function(err,rows,fields){
        if(err)
        {
            res.send(rows);  
        }
        else
        {
           console.log(err);
        }
    }
    )
})