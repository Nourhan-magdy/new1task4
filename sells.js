const express =require("express");
const market =express.market();
const mysqlConnection =require("../connection");

market.get("/",(req,res)=>{
    mysqlConnection.query("select * from thecamp_market_sells",
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
    Pool.query("insert into (thecaamp_market_sells) values (1,1,3,23/4/2022)",
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