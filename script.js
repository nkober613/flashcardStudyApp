
const flashcard = document.getElementById('flashcard');
const nextBtn = document.getElementById('next-btn');
const knownBtn = document.getElementById('known-btn');

const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');

const masteredCount = document.getElementById('mastered-count');
const remainingCount= document.getElementById('remaining-count');

const cardArray = [];
fetch("flashcardSet.json")
    .then(response => response.json())
    .then(data => {
        for(let card of data.flashcardSet.cards){
            cardArray.push(card);
        }     
})



function flipcard(){

}


function showNextCard(){

}


function markAsKnown(){
    
}