const getAnswer = document.querySelector('[data-js="answerButton"]');
const showAnswer = document.querySelector('[data-js="answer"]');

getAnswer.addEventListener('click', () => {
    // console.log("answer button hit!")
    getAnswer.classList.toggle("card__btn_answer--hidden")
    showAnswer.classList.toggle("card__answer--hidden");
})