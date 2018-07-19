
  const request = require('request');


var getWeather = function(lat,lon, callback){

    request({
        url: 'https://api.darksky.net/forecast/03bfc5a6cc5e8c6f4651f29aa50a57ea/'+lat+','+lon,
        json: true
    }, function(error, response, body){
        //console.log(JSON.stringify(body, undefined, 2));
        if(!error && response.statusCode === 200){
          callback(undefined, {
              temperature : body.currently.temperature+' F',
              other : 'other info'
          });
        }else if(response.statusCode === 400 || response.statusCode === 404){
          callback('unable to fetch ');
        }else{
          callback('cannot get data');
        }
    });//req

}
    // key: 03bfc5a6cc5e8c6f4651f29aa50a57ea
    // api: https://api.darksky.net/forecast/03bfc5a6cc5e8c6f4651f29aa50a57ea/37.8267,-122.4233






module.exports  = {
   getWeather
};











//end
