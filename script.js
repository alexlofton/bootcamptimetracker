var currentDate = dayjs();
var currentHour = dayjs().hour();

function compareCurrentHour() {
  var timeBlockHours = document.querySelectorAll('.time-block')

  timeBlockHours.forEach(function(hour) {
    timeBlockId = hour.id

    var formattedBlockHour = parseInt(timeBlockId.slice(5))
    console.log("formattedBlockHour", formattedBlockHour)

    if (formattedBlockHour < currentHour) {
      hour.classList.add('past')
      hour.classList.remove('present', 'future')
    } else if (currentHour === formattedBlockHour){
      hour.classList.add('present')
      hour.classList.remove('past', 'future')
    } else {
      hour.classList.add('future')
      hour.classList.remove('present', 'past')
    }
  }
)}

function clock() {
  var time = new Date(),
      hours = time.getHours(),
      minutes = time.getMinutes(),
      seconds = time.getSeconds();
      document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
    
    function harold(standIn) {
      if (standIn < 10) {
        standIn = '0' + standIn
      }
      return standIn;
    }
  }
  setInterval(clock, 1000);

function getUserInput() {
var timeBlockHours = document.querySelectorAll('.time-block')

  timeBlockHours.forEach(function(hour) {
    timeBlockId = hour.id

    var retrievedUserInput = localStorage.getItem(timeBlockId);
    console.log(retrievedUserInput)

    var parsedUserInput = JSON.parse(retrievedUserInput)
    console.log(parsedUserInput)
    var parentElement = document.getElementById(timeBlockId)
    
    if (parsedUserInput === null) {
      parentElement.querySelector('.description').textContent = ' '
    } else {
      parentElement.querySelector('.description').textContent = parsedUserInput
    }
  })
}

$(document).ready(function() {
  var formattedDate = currentDate.format('dddd MMMM D, YYYY')

  document.getElementById('currentDay').innerHTML = formattedDate;

  compareCurrentHour();
  
  var saveButtons = document.querySelectorAll('.saveBtn');

  saveButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var clickedButton = this;
      var timeBlock = clickedButton.closest('.time-block')
      var timeBlockId = timeBlock.id;
      var userInput = timeBlock.querySelector('.description').value;
      var stringifiedDescription = JSON.stringify(userInput);
      localStorage.setItem(timeBlockId, stringifiedDescription);
    });
  })
    getUserInput();
})


