//Author: Jingbo Bai

// Questions part
var pos = 0;
var questionType;
var test, main, question, choice=null, choices=null, chA, chB, chC,Answer;
var incorrect=0,correct = 0;
var subject=[mathQuestions,physicQuestions,celebrityQuestions,presidentsQuestions,geographyQuestions];
var today;
var stopStatus=0;

//Make random array for index of question and subject: pos , catagory
function randomsort(a, b) {
return Math.random()>.5 ? -1 : 1;
}
//radomsort end



//random subject every day and random question order
var catagory;
    catagory=localStorage.getItem('catagory');

//tracking date by using localStorage
//Use getDate()to get date and store it into localStorage of browser
window.onload=(function () {
var oldDate = localStorage.getItem('oldDate'),
date_now  = (new Date()).getDate();

 if (date_now != oldDate) {
     catagory++;
     localStorage.setItem('catagory', catagory);
		}
     localStorage.setItem('oldDate', date_now);
})();

if(localStorage.getItem('catagory')>0&&localStorage.getItem('catagory')<5)
  {
    catagory=localStorage.getItem('catagory');
  }
else{
    subject=subject.sort(randomsort);
    catagory=0;
    localStorage.setItem('catagory', catagory);
  }

var todaySubject=subject[catagory];
var questions = todaySubject.sort(randomsort);
	//random subject and question END


// render questions
switch (todaySubject) {
    case mathQuestions:
        today = "Math";

        break;
    case physicQuestions:
        today = "Physic";

        break;
    case celebrityQuestions:
        today = "Celebrity";

        break;
    case presidentsQuestions:
        today = "President";

        break;
    case geographyQuestions:
        today = "Geography";

        break;
}

function start(){
	test = document.getElementById("test");
  test.innerHTML = "<h2>Welcome To My Quiz!</h2>";
  test.innerHTML +="<h3>The subject today is <b>"+today+"</b></h3>"
  test.innerHTML +="<p>This quiz includes some basic questions relate to the subjuct.</p>"
  test.innerHTML +="<p>You can stop and resume the quiz if you want. </p>"
  test.innerHTML +="<p>Enjoy your quiz time!</p>"
	test.innerHTML += "<button id='submit' onclick='renderQuestion()'>Start</button>";

}

function renderQuestion(){
	test = document.getElementById("test");
  switch (today) {
      case "Math":
          document.getElementById("myImage").style.backgroundImage="url('./img/Math.jpg')";
          document.body.style.color="black";
          break;
      case "Physic":
          document.getElementById("myImage").style.backgroundImage="url('./img/Physic.jpg')";
          document.body.style.color="#000066";
          break;
      case "Celebrity":
          document.getElementById("myImage").style.backgroundImage="url('./img/Celebrity.jpg')";
          document.body.style.color="black";
          break;
      case "President":
          document.getElementById("myImage").style.backgroundImage="url('./img/Presidents.jpg')";
          document.body.style.color="#666699";
          break;
      case "Geography":
          document.getElementById("myImage").style.backgroundImage="url('./img/Geography.jpg')";
          document.body.style.color="#336600";
          break;
  }
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		document.getElementById("main").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
    clearInterval(countDown);
    startTime="timeout";
    document.getElementById("count").innerHTML="Test Finished";
		return false;
	}
  else{
  clearInterval(countDown);
  countDown =setInterval ( "timer()", 1000 );
  startTime=FullCount;
  document.getElementById("sub").innerHTML = "Today Is "+today+" Day !";
	document.getElementById("main").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos].question;
  //render question end


  //Check whether it is Multiple Choice Question

  if(questions[pos].ch1!=null){
    document.body.style.backgroundImage="url("+today+"'.jpg')";
  questionType="Multiple";
	chA = questions[pos].ch1;
	chB = questions[pos].ch2;
	chC = questions[pos].ch3;
  solution = questions[pos].answer;
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br><br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br><br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button id='submit' onclick='checkAnswer()'>Submit Answer</button>";
  test.innerHTML += "<p id='correct'><b> Correct: "+correct+"</b></p>";
  test.innerHTML += "<p id='incorrect'><b> Incorrect: "+incorrect+"</b></p>";
  }
  else{
    document.body.style.backgroundImage="url("+today+"'.jpg')";
    questionType="Text";
    solution = questions[pos].answer;
    test.innerHTML = "<h3>"+question+"</h3>";
  	test.innerHTML += "<input type='text' id='Answers' value='' > <br><br>";
  	test.innerHTML += "<button id='submit' onclick='checkAnswer()'>Submit Answer</button>";
    test.innerHTML += "<p id='correct'> Correct: <b> "+correct+"</b></p>";
    test.innerHTML += "<p id='incorrect'> Incorrect: <b>"+incorrect+"</b></p>";

    }
  }

}
function checkAnswer(){
  if(questionType=="Multiple"){
    choices = document.getElementsByName("choices");
      for(var i=0; i<choices.length; i++){
  		  if(choices[i].checked){
  			   choice = choices[i].value;
  		      }

  	    }
				if(choice == solution){
					correct++;
				}
				else{
					incorrect++;
				}
     }
  else if(questionType=="Text"){
  Answer = document.getElementById("Answers").value;
	if(Answer.toLowerCase() == solution.toLowerCase())
	   {
		  correct++;
	   }
		 else{
			 incorrect++;
		 }
    }
	pos++;
	renderQuestion();
}
// window.addEventListener("load", renderQuestion, false);
// Question part end
   window.addEventListener("load", start, false);



// Countdown part
//Initialize Countdown
var FullCount=15;
var startTime=FullCount;
var countDown=null;

function timer()
{
  if (startTime==0)
  {
  clearInterval(countDown);
  alert("Oops! Timeout!  ╮（￣﹏￣）╭");
  var submit=checkAnswer();
  }
   document.getElementById("count").innerHTML = "<h4>Timer</h4>"
   startTime=startTime-1;
   document.getElementById("count").innerHTML +=startTime+"<br><br>";
   document.getElementById("count").innerHTML += "<button id='stop' onclick='stop()' > Stop </button> ";
   document.getElementById("count").innerHTML += "<button id='resume' onclick='resume()' > Resume </button> ";
}

// Countdown part end

// stop and resume button

function stop()
{
  clearInterval(countDown);
  stopStatus = 1;
  document.getElementById('stop').style.fontSize= "20px";
  document.getElementById('stop').innerHTML="Stoped";
  $("#test").hide();
}

function resume()

{
  if(stopStatus==1){
  countDown = setInterval ( "timer()", 1000 );
  stopStatus=0;
  document.getElementById('stop').style.fontSize= "15px";
  document.getElementById('stop').innerHTML="Stop";
  $("#test").show();
  }
}
