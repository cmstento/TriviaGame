var intervalID;
var counter = 10;
var correct = 0;
var incorrect = 0;
var currentQuestion = 0


function startTimer () {
	intervalID = setInterval (function () {
		counter --
		$(".timer").text("Time Remaining " + counter) 
		if (counter == 0) { 
			checkAnswer ()
			showScore ()
			clearQuestions ()
			clearInterval (intervalID)
			$(".number-of-correct-answers").show()
			$(".number-of-incorrect-answers" ).show()

		}
	} ,1000) 
	createQuestion (questions[(currentQuestion) % 7])
	createQuestion (questions[(currentQuestion + 1) % 7])
	createQuestion (questions[(currentQuestion + 2) % 7])
	createQuestion (questions[(currentQuestion + 3) % 7])
	currentQuestion = (currentQuestion + 4) % 7
}

function checkAnswer () {
	$(".answers").children().each(function (index, element) {
		if (element.checked == true && element.value == "true") {
			correct ++

		} else if (element.checked == false && element.value == "true") {
			incorrect ++
		} 
	})
}

function showScore () {
	$(".number-of-correct-answers" ).text("number of correct answers " + correct)
	$(".number-of-incorrect-answers" ).text("number of incorrect answers " + incorrect)
}

$(".start-over").click(function()  {
	if (counter == 0) {
		counter = 10
		correct = 0
		incorrect = 0
		startTimer()
		$(".number-of-correct-answers").hide()
		$(".number-of-incorrect-answers" ).hide()
	}
})

function createQuestion (questionObject) {
	$(".questions").append(
		`<div class="question1">`+
					`<h3 class="question-header">${questionObject.question}</h3>`+
					`<div class = "answers">`+
						`<input type="radio" name="radioButton${questionObject.number}" value= "${questionObject.answers[0].value}" >${questionObject.answers[0].display}`+
						`<input type="radio" name="radioButton${questionObject.number}" value="${questionObject.answers[1].value}" >${questionObject.answers[1].display}`+
						`<input type="radio" name="radioButton${questionObject.number}" value="${questionObject.answers[2].value}" >${questionObject.answers[2].display}`+
						`<input type="radio" name="radioButton${questionObject.number}" value="${questionObject.answers[3].value}" >${questionObject.answers[3].display}`+
					`</div>`+
				 `</div>`)
;	
}

function clearQuestions () {
	$(".questions").html ("")
}


var questions = [
	{
		question: "Who is the Pope?",
		number: 1,
		answers: [
			{
				value: true,
				display: "Francis"
			},
			{
				value: false,
				display: "Donald"
			},
			{
				value: false,
				display: "Bob"
			},
			{
				value: false,
				display: "Steve"
			}	
		]	
	},
	{
		question: "What is 2 + 3?",
		number: 2,
		answers: [
			{
				value: false,
				display: "3"
			},
			{
				value: true,
				display: "5"
			},
			{
				value: false,
				display: "4"
			},
			{
				value: false,
				display: "1"
			}	
		]	
	},
	{
		question: "Who's the first person to walk on the moon?",
		number: 3,
		answers: [
			{
				value: false,
				display: "Buzz Aldren"
			},
			{
				value: false,
				display: "Buzz Lightyear"
			},
			{
				value: true,
				display: "Niel Armstrong"
			},
			{
				value: false,
				display: "Superman"
			}	
		]	
	},
	{
		question: "Who is 007?",
		number: 4,
		answers: [
			{
				value: false,
				display: "Donald Trump"
			},
			{
				value: false,
				display: "Q"
			},
			{
				value: false,
				display: "Money Penny"
			},
			{
				value: true,
				display: "James Bond"
			}	
		]	
	},
	{
		question: "What is pi?",
		number: 5,
		answers: [
			{
				value: true,
				display: "3.14159265358979323......."
			},
			{
				value: false,
				display: "5"
			},
			{
				value: false,
				display: "31Q"
			},
			{
				value: true,
				display: "James Bond"
			}	
		]	
	},
	{
		question: "Who was the first president of the US?",
		number: 6,
		answers: [
			{
				value: false,
				display: "3.14159265358979323......."
			},
			{
				value: false,
				display: "Money Penny"
			},
			{
				value: true,
				display: "George Washington"
			},
			{
				value: false,
				display: "James Bond"
			}	
		]	
	},
	{
		question: "What's my favorite color?",
		number: 7,
		answers: [
			{
				value: false,
				display: "red"
			},
			{
				value: false,
				display: "green"
			},
			{
				value: false,
				display: "yellow"
			},
			{
				value: true,
				display: "blue"
			}	
		]	
	}
]

startTimer()