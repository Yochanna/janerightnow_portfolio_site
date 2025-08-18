var startButton = document.getElementById('start-button');
var message     = document.getElementById('message');

startButton.onclick = function() {
  var secret = Math.floor(Math.random() * 20) + 1;
  var guess;
  var tries = 0;

    do {
      guess = prompt('Please guess the secret number (1–20):');
    tries = tries + 1;

    if (guess == secret) {
      alert('✅ Correct Guess!');
    } else if (guess < secret) {
      alert('❌ Incorrect, too low');
    } else if (guess > secret) {
      alert('❌ Incorrect, too high');
    } else {
      
      alert('❗ Please enter a number between 1 and 20.');
    }
  } 
  while (guess != secret);

  message.innerText = 
    '🎉 You got it in ' + tries + ' ' + (tries === 1 ? 'try' : 'tries') +
    '! The secret number was ' + secret + '.';
};





