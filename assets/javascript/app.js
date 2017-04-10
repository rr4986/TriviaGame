
var count=30;
var numberRight=0;
var numberWrong=0;


window.onload = function() {

	$("#timer").html("<h1>Time: "+count+" seconds</h2>");
	intervalId = setInterval(timeUp, 1000);
}


function timeUp() {


	count--;
	$("#timer").html("<h1>Time: "+count+" seconds</h2>");
  	if(count<1){

  		if($('input[name=firstquestion]:checked').val()==="right"){
  			numberRight++;
  		}
  		if($('input[name=firstquestion]:checked').val()==="wrong"){
  			numberWrong++;
  		}
  		if($('input[name=secondquestion]:checked').val()==="right"){
  			numberRight++;
  		}
  		if($('input[name=secondquestion]:checked').val()==="wrong"){
  			numberWrong++;
  		}
  		if($('input[name=thirdquestion]:checked').val()==="right"){
  			numberRight++;
  		}
  		if($('input[name=thirdquestion]:checked').val()==="wrong"){
  			numberWrong++;
  		}
  		if($('input[name=fourthquestion]:checked').val()==="right"){
  			numberRight++;
  		}
  		if($('input[name=fourthquestion]:checked').val()==="wrong"){
  			numberWrong++;
  		}
  		if($('input[name=fifthquestion]:checked').val()==="right"){
  			numberRight++;
  		}
  		if($('input[name=fifthquestion]:checked').val()==="wrong"){
  			numberWrong++;
  		}
  		if($('input[name=sixthquestion]:checked').val()==="right"){
  			numberRight++;
  		}
  		if($('input[name=sixthquestion]:checked').val()==="wrong"){
  			numberWrong++;
  		}

  		$(".container").html("<h1>Time's Up <br><br>"+
 		"<h1>You got "+numberRight+" Correct<br>"+"You got "+numberWrong+" Wrong</h1>");
  		clearInterval(intervalId);

  	}

}

