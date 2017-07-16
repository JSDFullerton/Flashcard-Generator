

// CLOSE CARD CONSTRUCTOR

function CreateCloseCard(text, cloze) {

	// convert user inputs to lowercase
	var textLowerCase = text.tolowerCase();
	var clozeLowerCase = cloze.tolowerCase();


	this.fullText = text;
	this.cloze = cloze
	this.partial = text.replace(cloze, "....");
	this.errorCheck = function(error) {
		if(!textLowerCase.includes(clozeLowerCase)) {
			console.log("ERROR OCCURED: answer not cut out of question");
		}
	}
}


// MAKE AVAIL TO EXPORT EXTERNALLY
module.exports = ClozeCard;