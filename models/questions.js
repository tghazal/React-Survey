
module.exports=function(sequelize,DataTypes){
    var Question= sequelize.define("Question", {
        Description:DataTypes.STRING
    })
    return Question;
}