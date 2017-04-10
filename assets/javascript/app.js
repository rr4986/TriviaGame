
var count=15;
var numberRight=0;
var numberWrong=0;

window.onload = function() {

	$("#timer").html("<h1>Time: "+count+" seconds</h2>");
	intervalId = setInterval(timeUp, 1000);
}

$( "input" ).on( "click", function() {
  if($( "input:checked" ).val()==="right" ){
  	numberRight++;
  };
  if($( "input:checked" ).val()==="wrong" ){
  	numberWrong++;
  }
});

function timeUp() {

	count--;
	$("#timer").html("<h1>Time: "+count+" seconds</h2>");
  	if(count<1){
  		$(".container").html("<h1>Time's Up 2 <br><br>"+
 		"<h1>You got "+numberRight+" Correct<br>"+"You got "+numberWrong+" Wrong</h1>");
  		clearInterval(intervalId);

  	}

}


