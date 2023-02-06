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

let currentQuestionIndex = 0;

// Question and answer variable, nested array/object within array
const quizQA = [
    {
        question: "What is Naruto's sage mode called in Naruto?",
        answers: ["Toad Sage Mode", "Snake Sage Mode", "Lizard Sage Mode", "Dragon Sage Mode"],
        correctAnswer: "Toad Sage Mode",
        img: "assets/images/naruto.jpg"
    },
    
    {
        question: "Who is Rin Okumura's father in Blue Exocist?",
        answers: ["Shiro Fujimoto", "Satan", "Yukio Okumura", "Igor Neuhaus"],
        correctAnswer: "Satan",
        img: "assets/images/rin.jpg"
    },
    
    {
        question: "What is the name of the guild Kirito joins in Sword Art Online?",
        answers: ["Moonlit Black Cats", "Knights of the Blood", "Aincrad Liberation Force", "Titan's Hand"],
        correctAnswer: "Moonlit Black Cats",
        img: "assets/images/kirito.png"
    },

    {
        question: "Who is NOT a member of the Future Gadget Lab in Steins;Gate?",
        answers: ["Itaru Hashida", "Kiryuu Moeka", "Kurisu Makise", "Yugo Tennouji"],
        correctAnswer: "Yugo Tennouji",
        img: "assets/images/steins.png"
    }, 

    {
        question: "What is the name of Midoriya Izuku's quirk in My Hero Academia?",
        answers: ["All for One", "Bruiser", "Charging Muscles", "One for All"],
        correctAnswer: "One for All",
        img: "assets/images/izuku.jpg"
    },

    {
        question: "How many Sukuna's fingers did Itadori Yuji eat in Jujutsu Kaisen?",
        answers: ["3", "4", "6", "2"],
        correctAnswer: "4",
        img: "assets/images/yuji.jpg"
    },

    {
        question: "What colour is Violet's brooch in Violet Evergarden?",
        answers: ["Red", "Blue", "Green", "Purple"],
        correctAnswer: "Green",
        img: "assets/images/violet.jpg"
    },

    {
        question: "What is the name of the ophanage 'Mama' in the Promised Neverland?",
        answers: ["Gilda", "Isabella", "Emma", "Viviana"],
        correctAnswer: "Isabella",
        img: "assets/images/isabella.jpg"
    },

    {
        question: "What is the name of Kaneki Ken's kagune in Tokyo Ghoul?",
        answers: ["Koukaku", "Bikaku", "Chimera", "Rinkaku"],
        correctAnswer: "Rinkaku",
        img: "assets/images/kaneki.jpg"
    },

    {
        question: "What is the name of Eren Yaeger's first Titan in Attack on Titan?",
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
}

/**
 * Toggles the quiz screen section to visible and makes the all other sections hidden
 */
function showQuizSection() {
    // toggle visibility
    home.hidden = true;
    instructs.hidden = true;
    quiz.hidden = false;
    document.getElementById("next-question").hidden = true;
    addQuestionAnswers();
}

function addQuestionAnswers() {
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
        answers[j].addEventListener("click", checkAnswer);
    }
} 

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
    document.getElementById("next-question").hidden = false;
}

// if (currentQuestionIndex === quizQA.length) {
//     return;
// } else {
//     btn.style.backgroundColor = "#464089";
// }

/**
 * Toggles the quiz screen section to visible and makes the all other sections hidden
 * Iterates and fills html sections with contents of const array
 */
// function playQuiz() {
    
//     showQuiz();

//     // accesses DOM elements and assigns to variables
//     let questions = document.getElementById("questions");
//     let answers = document.querySelectorAll("#answers > button");
//     let imageSpace = document.getElementById("image");

//     // iterates through quizQA object and fills the question h1 element and answers elements using quizQA array
//     for (let i = 0; i < quizQA.length; i++) {
//         questions.textContent = quizQA[i].question;
//         imageSpace.src = quizQA[i].img;
//         for (let j = 0; j < 4; j++) {
//             //iterates answers into button text content
//             answers[j].textContent = quizQA[i].answers[j];

//             //adds event listener to each button and performs check on the button thats clicked against correctAnswer.
//             //changes backgroundColor accordingly
//             answers[j].addEventListener("click", function() {
//                 if (this.innerText === quizQA[i].correctAnswer) {
//                     this.style.backgroundColor = "green";
//                     incrementScore();
//                     // wait for 1 second and then move to the next question
//                     setTimeout(function() {
//                         if (i === quizQA.length) {
//                             return;
//                         } else {
//                             {
//                                 btn.style.backgroundColor = "#464089";
//                             }
//                         }
//                     }, 1000);
//                 } else {
//                     this.style.backgroundColor = "red";
//                 }
//             });

//         }
//         break;
//     }
// }

function incrementScore() {
    let score = 0;
    score += 10;
    let scoreBox = document.getElementById("score");
    scoreBox.textContent = `${score}`;
}





