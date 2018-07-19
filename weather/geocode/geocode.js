
  const request = require('request');


  var geocodeAddress = function(address, callback){


   var a = encodeURIComponent(address); // encode address


   request({
       url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+a+'&key=AIzaSyDzGS3ZpR0-S8uSK8x9ME4_jDkmNT6P9sY',
       json: true
   }, function(error, response, body){
       //console.log(JSON.stringify(body, undefined, 2));
       if(error){
         callback('could not find address');

       }else if(body.status=== 'ZERO_RESULTS'){
         callback('could not find address');

       }else{
         callback(undefined, {
           'address' : body.results[0].formatted_address,
           'lat' : body.results[0].geometry.location.lat,
           'lon' : body.results[0].geometry.location.lng
         });
         //console.log(`Lat: ${body.results[0].geometry.location.lat}`);
         //console.log(`Lon: ${body.results[0].geometry.location.lng}`);

         //var lat = body.results[0].geometry.location.lat;
         //var lng = body.results[0].geometry.location.lng;

        }

   });


 };



module.exports = {
  geocodeAddress
};
