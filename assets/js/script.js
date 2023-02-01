// main three Divs assigned to variable for easy access and usage
let home = document.getElementById("home");
let instructs = document.getElementById("instructs");
let quiz = document.getElementById("quiz");

// Question and answer variable, nested array/object within array
const quizQA = [
    {
        question: "What is Naruto's sage mode called in Naruto?",
        answers: ["Toad Sage Mode", "Snake Sage Mode", "Lizard Sage Mode", "Dragon Sage Mode"]
    },
    
    {
        question: "Who is Rin Okumura's father in Blue Exocist?",
        answers: ["Shiro Fujimoto", "Satan", "Yukio Okumura", "Igor Neuhaus"]
    },
    
    {
        question: "What is the name of the guild Kirito joins in Sword Art Online?",
        answers: ["Moonlit Black Cats", "Knights of the Blood", "Aincrad Liberation Force", "Titan's Hand"]
    },

    {
        question: "Who is NOT a member of the Future Gadget Lab in Steins;Gate?",
        answers: ["Itaru Hashida", "Kiryuu Moeka", "Kurisu Makise", "Yugo Tennouji"]
    }, 

    {
        question: "What is the name of Midoriya Izuku's quirk in My Hero Academia?",
        answers: ["All for One", "Bruiser", "Charging Muscles", "One for All"]
    },

    {
        question: "How many Sukuna's fingers did Itadori Yuji eat in Jujutsu Kaisen?",
        answers: ["3", "4", "6", "2"]
    },

    {
        question: "What colour is Violet's brooch in Violet Evergarden?",
        answers: ["Red", "Blue", "Green", "Purple"]
    },

    {
        question: "What is the name of the ophanage 'Mama' in the Promised Neverland?",
        answers: ["Gilda", "Isabella", "Emma", "Viviana"]
    },

    {
        question: "What is the name of Kaneki Ken's kagune in Tokyo Ghoul?",
        answers: ["Koukaku", "Bikaku", "Chimera", "Rinkaku"]
    },

    {
        question: "What is the name of Eren Yaeger's first Titan in Attack on Titan?",
        answers: ["Attack Titan", "Colossal Titan", "Founding Day Titan", "Armored Titan"]
    }
];

//add event listener to how to play button
let instructions = document.getElementById("instructions");
instructions.addEventListener("click", howToPlay);

// add event listener to return home button
let instructHome = document.getElementById("instruct-home");
instructHome.addEventListener("click", returnHome);

// add event listener to start quiz button
let startQuiz = document.getElementById("play-game");
startQuiz.addEventListener("click", playQuiz);

// Adds event lister to quiz logo or easy return to home screen
let quizHome = document.getElementById("logo");
quizHome.addEventListener("click", returnHome);

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
 * Iterates and fills html sections with contents of const array
 */
function playQuiz() {
    // toggle visibility
    home.hidden = true;
    instructs.hidden = true;
    quiz.hidden = false;

    // accesses DOM elements and assigns to variables
    let questions = document.getElementById("questions");
    // let answer = document.getElementById("answers");

    // iterates through quizQA object and fills the question h1 element and answers elements using quizQA array
    for (let i = 0; i < quizQA.length; i++) {
        questions.textContent = quizQA[i].question;
        
        break;
    }
}

function checkScore() {
    
}

function incrementScore() {
    let score = 0;
    score += score+10;
    let scoreBox = document.getElementById("score");
    scoreBox.textContent = `${score}`;
}





