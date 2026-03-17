
const flashcard = document.getElementById('flashcard');
const nextBtn = document.getElementById('next-btn');
const knownBtn = document.getElementById('known-btn');

const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');

const masteredCount = document.getElementById('mastered-count');
const remainingCount= document.getElementById('remaining-count');



function flipcard(){
    flashcard.classList.toggle("active");
}


function showNextCard(){

}


function markAsKnown(){
    
}

flashcard.addEventListener('click',flipcard);