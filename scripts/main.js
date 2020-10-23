document.addEventListener('DOMContentLoaded', function () {
  let counter = parseInt(document.querySelector('.counter strong').innerHTML);
let score = 0;
const updatecounters = function () {
  let element = this.closest('.trivia-question');
  if (this.classList.contains('is-correct')) {
    score += 1;
  }
  else {
  element.querySelector('.is-correct').classList.add('actual-answer');
  }
  counter += 1;
  this.closest('.quiz-answers-wrapper').classList.add('clicked');
  element.classList.add('hiding');

  setTimeout(function () {
    element.classList.add('hidden');
    document.getElementById(counter).classList.remove('hidden');
    document.querySelector('.counter p strong').innerHTML = counter, false;  }, 2000);
    if (counter === 16) {
      document.querySelector('.quiz-container').classList.add('hidden');
      document.querySelector('.quiz-score').classList.remove('hidden');
      document.querySelector('.quiz-score').innerHTML = ('<div class="finalscore"><h2>You got '+score+' correct out of 15</p></div>')
    }
};
const buttons = document.querySelectorAll('.single-answer');
Array.from(buttons).forEach(function (buttons) {
  buttons.addEventListener('click', updatecounters, false);
});
});
