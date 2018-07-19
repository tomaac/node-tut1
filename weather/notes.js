console.log('got notes');






addNote = function(title, body){

    console.log("adding note: ", title, body);
}



readNote = function(title){

  console.log('reading: '+title);

}



removeNote = function(title){

    console.log("deleting: "+ title);
}



getAll = function(){
  console.log('get all');
}




//exports
module.exports = {
  addNote, readNote, removeNote, getAll

}
