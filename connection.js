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

module.exports = mysqlConnection;