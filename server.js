var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/firstDeploy', function(request, response){
    response.status(200).send({title:"firstApiDeploy"});
});




app.listen(3000, function(){
    console.log("API Server on port 3000...")
});