function setUnixTime() {
   var time = new Date().getTime();
   $( "time" ).text( "The time is " + time );
}

var intervalId = window.setInterval(function(){
    setUnixTime();
  }, 1000);