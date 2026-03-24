document.addEventListener("DOMContentLoaded", function() {
    const flashcard = document.getElementById('flashcard');
    const nextBtn = document.getElementById('next-btn');
    const knownBtn = document.getElementById('known-btn');
    const restart = document.getElementById('restart')
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
            showNextCard();    
        })


    function flipcard(){
        flashcard.classList.toggle("active");
    }


    function showNextCard(){
        let x = Math.floor((Math.random() * 10));
        let cardNow = cardArray[x];
        questionText.innerHTML = cardNow.question;
        answerText.innerHTML = cardNow.answer;

    }


    function markAsKnown(){
        
    }

    restart.addEventListener('click', function(){
            location.reload();
        })

    flashcard.addEventListener('click',flipcard);
    nextBtn.addEventListener('click',showNextCard);
})