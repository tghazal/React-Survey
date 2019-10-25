var express= require("express")
var db=require("./models")

var PORT=process.env.PORT||3001;
var app = express()


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

db.sequelize.sync().then(function(){
    app.listen(PORT,function(){
        console.log("listening on port %s",PORT)
    })
})


