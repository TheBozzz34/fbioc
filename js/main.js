function setTime() {
   var time = new Date().getTime();
   $( "time" ).text( "The time is " + time );
}

var intervalId = window.setInterval(function(){
    setTime();
  }, 1000);