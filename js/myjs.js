// Set the date we're counting down to
var countDownDate = new Date("June 1, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML = days + ":" + hours + ":"
  + minutes + ":" + seconds ;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);
function activefotoli(){
    document.getElementById("fotoli1").style.backgroundColor="#79B331";
    document.getElementById("aqciatext1").style.color="#79B331";
}
function activefotoli2(){
    document.getElementById("potoli2").style.backgroundColor="#79B331";
    document.getElementById("aqciatext2").style.color="#79B331";
}
function activefotoli3(){
    document.getElementById("potoli3").style.backgroundColor="#79B331";
    document.getElementById("aqciatext3").style.color="#79B331";
}
function activefotoli4(){
    document.getElementById("potoli4").style.backgroundColor="#79B331";
    document.getElementById("aqciatext4").style.color="#79B331";
}