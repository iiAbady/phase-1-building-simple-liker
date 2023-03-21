// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function setup() {
	const likeButtons = document.querySelectorAll('.like-glyph');
	likeButtons.forEach(likeButton => likeButton.addEventListener('click', likeHandler));
}

function likeHandler(e) {
	mimicServerCall().then(() => {
	e.target.textContent = e.target.textContent === FULL_HEART ? EMPTY_HEART : FULL_HEART;
	e.target.classList.toggle('activated-heart');
	}).catch(({message}) => {
		 const error = document.querySelector('#modal');
		 error.classList.remove('hidden');
	});
}

document.addEventListener('DOMContentLoaded', setup)


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
