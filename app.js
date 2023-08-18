const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");

const app = express();

var listInput = ["barbara","modi","shamshera"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

const d = new Date();
var day = d.getDay();
var currentDay = ""

switch(day){
    case 0: currentDay="sunday";
    break;
    case 1: currentDay="monday";
    break;
    case 2: currentDay="tuesday";
    break;
    case 3: currentDay="wednesday";
    break;
    case 4: currentDay="thursday";
    break;
    case 5: currentDay="friday";
    break;
    case 6: currentDay="saturday";
    break;
    default:
        console.log("invalid day");
}

res.render("list", {newItemList: listInput, keyDay: currentDay});
})

app.post("/",function(req,res){
    var listItem = req.body.input1;
    listInput.push(listItem);
    res.redirect("/");
})


app.listen("3000", function(){
    console.log("listening to port 3000");
})