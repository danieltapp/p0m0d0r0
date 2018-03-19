let countdown;
const timeDisplay = document.querySelector(".timeDisplay");
const customTimeButton = document.querySelector(".customTimeButton");
const pomodoroButton = document.querySelector(".pomodoroButton");
const endButton = document.querySelector(".endButton");
const customTimeInput = document.querySelector(".customTimeInput");

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTime(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }

    displayTime(secondsLeft);
  }, 1000);
}

function displayTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  timeDisplay.innerHTML = minutes + " : " + remainingSeconds;
}

customTimeButton.addEventListener("click", function() {
  var customTime = customTimeInput.value * 60;
  if (customTime <= 0) {
    alert("You must enter at least 1 minute!");
  } else {
    timer(customTime);
    customTimeInput.value = "";
  }
});

pomodoroButton.addEventListener("click", function() {
  timer(1500);
});

endButton.addEventListener("click", function() {
  timer(0);
  timeDisplay.innerHTML ="";
});

  $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      },
      complete: function() { console.log('Closed'); } // Callback for Modal close
    }
  );
      