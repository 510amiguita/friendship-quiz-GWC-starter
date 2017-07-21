// questions to be randomly asked on page load
var questionsList = ["What are your/your friend's favorite foods?", "What are your/your friend's favorite animals?"];


//randomly chooses a question to display
function init() {
  var randomIndex = Math.floor(Math.random() * questionsList.length);
  document.getElementById("question").innerHTML = questionsList[randomIndex];
}

window.onload = init;

var answerList = []; //initialize answerList to be empty

/* ADD YOUR CODE BELOW */

//adds user-submitted answer to answerList
function submitAnswer() {
 var answer = document.getElementById("answerInput").value;
 answerList.push(answer);
}


//checks if user-submitted guess is in answerList
function checkGuess() {                                     //Function that determines whether the guesses are correct or not
  var found = false                                         //Defining false variable
  var guess = document.getElementById('guessInput').value;  //Directs the guessInput into the variable guess

  for(var i=0; i < answerList.length; i++){                 //Checks through list
    if(guess == answerList[i]){                             //If input from second user matches with first user then they are correct and a great friend
      alert("YOU ARE A GREAT FRIEND!")
      found = true;
    }
  }
  if(found == false){                                       //If input from second user does not match with first user then they are incorrect and a terrible friend
    alert("YOU ARE A TERRIBLE FRIEND!");                  
  }
}
