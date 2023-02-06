// main three Divs assigned to variable for easy access and usage
let home = document.getElementById("home");
let instructs = document.getElementById("instructs");
let quiz = document.getElementById("quiz");

//add event listener to how to play button
let instructions = document.getElementById("instructions");
instructions.addEventListener("click", howToPlay);

// add event listener to return home button
let instructHome = document.getElementById("instruct-home");
instructHome.addEventListener("click", returnHome);

// add event listener to start quiz button
let startQuiz = document.getElementById("play-game");
startQuiz.addEventListener("click", showQuizSection);

// Adds event lister to quiz logo or easy return to home screen
let quizHome = document.getElementById("logo");
quizHome.addEventListener("click", returnHome);

//Variable to store the index number for iteration
let currentQuestionIndex = 0;

//Keeps track of the score
let score = 0;

let highscore = 0;

// Question and answer variable, nested array/object within array
const quizQA = [
    {
        question: "What is Naruto's sage mode called in Naruto?",
        answers: ["Toad Sage Mode", "Snake Sage Mode", "Lizard Sage Mode", "Dragon Sage Mode"],
        correctAnswer: "Toad Sage Mode",
        img: "assets/images/naruto.jpg"
    },
    
    {
        question: "Who is Rin Okumura's father?",
        answers: ["Shiro Fujimoto", "Satan", "Yukio Okumura", "Igor Neuhaus"],
        correctAnswer: "Satan",
        img: "assets/images/rin.jpg"
    },
    
    {
        question: "What is the name of the guild Kirito joins?",
        answers: ["Moonlit Black Cats", "Knights of the Blood", "Aincrad Liberation Force", "Titan's Hand"],
        correctAnswer: "Moonlit Black Cats",
        img: "assets/images/kirito.png"
    },

    {
        question: "Who is NOT a member of Future Gadget Lab?",
        answers: ["Itaru Hashida", "Kiryuu Moeka", "Kurisu Makise", "Yugo Tennouji"],
        correctAnswer: "Yugo Tennouji",
        img: "assets/images/steins.png"
    }, 

    {
        question: "What is the name of Midoriya Izuku's quirk?",
        answers: ["All for One", "Bruiser", "Charging Muscles", "One for All"],
        correctAnswer: "One for All",
        img: "assets/images/izuku.jpg"
    },

    {
        question: "How many Sukuna's fingers did Itadori Yuji eat?",
        answers: ["3", "4", "6", "2"],
        correctAnswer: "4",
        img: "assets/images/yuji.jpg"
    },

    {
        question: "What colour is Violet's brooch?",
        answers: ["Red", "Blue", "Green", "Purple"],
        correctAnswer: "Green",
        img: "assets/images/violet.jpg"
    },

    {
        question: "What is the name of the ophanage 'Mama'?",
        answers: ["Gilda", "Isabella", "Emma", "Viviana"],
        correctAnswer: "Isabella",
        img: "assets/images/isabella.jpg"
    },

    {
        question: "What is the name of Kaneki Ken's kagune?",
        answers: ["Koukaku", "Bikaku", "Chimera", "Rinkaku"],
        correctAnswer: "Rinkaku",
        img: "assets/images/kaneki.jpg"
    },

    {
        question: "What is the name of Eren Yaeger's first Titan?",
        answers: ["Attack Titan", "Colossal Titan", "Founding Day Titan", "Armored Titan"],
        correctAnswer: "Attack Titan",
        img: "assets/images/AoT.jpg"
    }
];

/**
 * Toggles the home screen section to hidden and makes the instructions screen visible
 */
function howToPlay() {
    home.hidden = true;
    instructs.hidden = false;
}

/**
 * Toggles the home screen section to visible and makes the all other sections hidden
 */
function returnHome() {
    home.hidden = false;
    instructs.hidden = true;
    quiz.hidden = true;
    currentQuestionIndex = 0;
    document.getElementById("score").textContent = 0;
}

/**
 * Toggles the quiz screen section to visible and makes the all other sections hidden
 */
function showQuizSection() {
    // toggle visibility
    score = 0;
    home.hidden = true;
    instructs.hidden = true;
    quiz.hidden = false;
    document.getElementById("next-question").hidden = true;
    addQuestionAnswers();
}

/**
 * Iterates the next index questions, image and answers into DOM elements
 * Adds event listener to all buttons and calls the checkAnswer function
 */
function addQuestionAnswers() {
    if (currentQuestionIndex === quizQA.length) {
        displayModal();
    }

    // accesses DOM elements and assigns to variables
    let questions = document.getElementById("questions");
    let answers = document.querySelectorAll("#answers > button");
    let imageSpace = document.getElementById("image");

    // iterates through quizQA object and fills the question h1 element and answers elements using quizQA array
    questions.textContent = quizQA[currentQuestionIndex].question;
    imageSpace.src = quizQA[currentQuestionIndex].img;
    for (let j = 0; j < 4; j++) {
        //iterates answers into button text content
        answers[j].textContent = quizQA[currentQuestionIndex].answers[j];
        answers[j].style.backgroundColor = "#464089";
        answers[j].addEventListener("click", checkAnswer);
    }
} 

/**
 * Checks the textContent of the button clicked on and acts accordingly:
 * Changes buttons backgroundColor depending on correctAnswer
 * Adds 1 to checkQuestionIndex
 * Adds an event listener to next-question button
 */
function checkAnswer() {
    
    if (this.textContent === quizQA[currentQuestionIndex].correctAnswer) {
        this.style.backgroundColor = "green";
        incrementScore();
    } else {
        this.style.backgroundColor = "red";
        let buttons = document.querySelectorAll("#answers > button");
        for (let i = 0; i < 4; i++) {
            if (buttons[i].textContent === quizQA[currentQuestionIndex].correctAnswer) {
                buttons[i].style.backgroundColor = "green";
            }
        }
    }
    currentQuestionIndex++;

    let nextQuestion = document.getElementById("next-question");
    nextQuestion.addEventListener("click", addQuestionAnswers);
}

/**
 * Adds 10 to the score and puts the content into score-box
 */
function incrementScore() {
    if (score < 100){
        score += 10;
        let scoreBox = document.getElementById("score");
        scoreBox.textContent = `${score}`;
    }
}

/**
 * Displays a modal box at the end of the quiz
 */
function displayModal() {
    quiz.hidden = true;
    document.getElementById("end-quiz").hidden = false;   
    document.getElementById("score-result").textContent = score; 
    customResult();
}

/**
 * Inserts a sentence from an array into a p element in the DOM depending on result
 */
function customResult() {
    let para = ["You did great! You've proven yourself the king of anime knowledge",
                "You did okay but there's still room for improvement! Try Again!",
                "Boo! You did terrible! Watch some more anime then try again, scrub!"];
    if (score > 80){
        document.getElementById("custom-result").textContent = para[0];
    } else if (score > 50) {
        document.getElementById("custom-result").textContent = para[1];
    } else {
        document.getElementById("custom-result").textContent = para[2];
    }

}





