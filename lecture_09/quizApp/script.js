//First we have to make questions 
//hardcoded question -> later we will take question from API when we will learn Backend

// we have created a array of object consisting the questions of the quiz

const quizData=[
     {
         question:"1. Which language runs in a browser?",
         a:'Java',
         b:'JS',
         c:'Python',
         D:'C',
         correct:'b'
     },
     {
         question:"2. Which language runs in a browser?",
         a:'Java',
         b:'JS',
         c:'Python',
         D:'C',
         correct:'b'
     },
     {
         question:"3. Which language runs in a browser?",
         a:'Java',
         b:'JS',
         c:'Python',
         D:'C',
         correct:'b'
     },
     {
         question:"4. Which language runs in a browser?",
         a:'Java',
         b:'JS',
         c:'Python',
         D:'C',
         correct:'b'
     }

]

//querySelectorAll() -> returns all the similar class Element in form of array 

const quiz = document.getElementById('quiz');

const answerEls = document.querySelectorAll('.answer'); //we are using . since there are multiple elements 
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let score  = 0;         //this will store the score of elements
let currQuiz =0;       //tracks the quiz number so that we can reinitialised it after the question is over.

loadQuiz();     //when ever we will refresh this function will be recalled;

function loadQuiz() {

    deselectAnswer()

    const currentQuizData = quizData[currQuiz];

    questionEl.innerHTML= currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked=false);
}



//this will be called when we have to check
function getSelect() {

    let answer;
    answerEls.forEach(answerEl =>  {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer;
}

submitBtn.addEventListener("click",() => {
    const answer = getSelect();

    if(answer) {
        if(answer === quizData[currQuiz].correct) {
            score++;
        }
        currQuiz++;     //this will incremenet to the next question 

        if(currQuiz <quizData.length) {
            loadQuiz();     //if the currQuiz is within range then we will recall loadQuiz;
        }
        else {
            quiz.innerHTML = `
            <h2> Score ${score}</h2>
            `
        }
    }
})