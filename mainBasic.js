// REQUIRED PACKAGES & MODULE FILES
var inquirer = require("inquirer");
var basicCard = require("./basicCard.js");
var basicQuestions = require("./basicquestion.JSON");
var fs = require("fs");


// GLOBAL VARIABLES
var scoreCount = 0;
var questionArr = [];
var questionsCount = 0;
var currentCard;




// CREATE QUESTIONS USING CONSTRUCTOR FUNCT
function pullBasicQuestions(front, back) {

	for (var i = 0; i < basicQuestions.length; i++) {


		// Pull Question Objects + Arguments form Basic JSON File
		currentCard = new BasicCard(basicQuestions[i].front, basicQuestions[i].back);

		// Push Question to Array
		questionArr.push(currentCard);
		questionCount++;

	}// for loop close
	
	console.log("QUESTION COUNT: " + questionCount);
	console.log("CURRENT QUESTIONS: " + questionArr);
	
}// close pullBasicQuestions funt 




// INQUIRER FUNCTION FOR USER INPUTS
function askQuestions() {

	if (questionCount < questionArr.length) {
		
		inquirer.prompt([
			{
				name: "question",
				type: "input",
				message: questionArr[0]
			},
			


			])// close inquirer
		
		// FUNCTION TO EXECUTE AFTR USER INPUT ANSWER TO QUESTION - drop input to lower case
		.then(function(response) {
			if(response.question === quest[i].back) {
				console.log("CORRECT");
				scoreCount++;

			}// close IF state

			else {
				console.log("WRONG...the correct answer is: " + quest[i].back);
				scoreCount--;

			}// close ELSE state
			askQuestions();

		})// close .then func
	}// close if statement
}// close askQuestions funct





