document.addEventListener("DOMContentLoaded", function() {
    const flashcard = document.getElementById('flashcard');
    const nextBtn = document.getElementById('next-btn');
    const knownBtn = document.getElementById('known-btn');
    const restart = document.getElementById('restart')
    const questionText = document.getElementById('question-text');
    const answerText = document.getElementById('answer-text');
 main
    let mastered = 0;
    let currentCardIndex = null;
    const masteredCount = document.getElementById('mastered-count');
    const remainingCount= document.getElementById('remaining-count');
  const cardArray = [];
  
fetch("flashcardSet.json")
    .then(response => response.json())
    .then(data => {
        for(let card of data.flashcardSet.cards){
            cardArray.push(card);
        } 
        updateCounts();
    showNextCard();    
})

function updateCounts(){
    masteredCount.textContent = mastered;
    remainingCount.textContent = cardArray.length;
} 
  
function flipcard(){
    flashcard.classList.toggle("active");
    }
  
function showNextCard(){
    if(cardArray.length === 0){
        questionText.innerHTML = "All cards mastered!";
        answerText.innerHTML = "";
        return;
    }
  
    let x = Math.floor(Math.random() * cardArray.length);
    currentCardIndex = x;
    let cardNow = cardArray[x];

    questionText.innerHTML = cardNow.question;
    answerText.innerHTML = cardNow.answer;
}

function markAsKnown(){
    if(cardArray.length === 0) return;
    cardArray.splice(currentCardIndex, 1);
    mastered++;
    updateCounts();
    showNextCard();
}

flashcard.addEventListener('click',flipcard);
nextBtn.addEventListener('click',showNextCard);
knownBtn.addEventListener('click', markAsKnown);

restart.addEventListener('click', function(){
            location.reload();
 })