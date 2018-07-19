
    const express = require('express');
    const request = require('request');
    const fs = require('fs');
    const hbs = require('hbs');

    const port = process.env.PORT || 3000;

    var app = express();


    var options = {};
    var maintanence = false;


    hbs.registerPartials(__dirname+'/views/partials'); // header/footer includes dir
    app.set('view engine', 'hbs'); // sets template engine



    app.use(function(req,res,next){

        var now = new Date().toString();
        var logData = now+': '+req.method+' ; '+req.url;
        fs.appendFile('access.log', logData+'\n', function(err){
          if(err){ console.log('file not writable.');}
        });

        next();
    });



    app.use(function(req,res,next){
        if(maintanence === true){
          res.render('maintanence.hbs',{});
        }else{   next();  }
    });



    app.use(express.static(__dirname+'/public', options)); // pub mape daudz failiem


    // template helpers
    hbs.registerHelper('getCurrentYear',function(){  return new Date().getFullYear();  });
    hbs.registerHelper('screamer',function(text){ return text.toUpperCase(); });




    app.get('/', function(req, res){
        res.render('home.hbs',{
          title: 'home page',
          welcome_message: 'Welcome to node site',
        });
    });





    app.get('/about', function(req,res){
      res.render('about.hbs', {
          title : 'about page',
      });
    });





    app.get('/bad', function(req, res){
        res.send({
          error: 'not found'
        });
    });





    app.listen(port, function(){
      console.log('server running on port '+port+'...');
    });
