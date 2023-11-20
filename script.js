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


//loop through each html element (node) and grab the id attribute
//while we are in the loop for each element use localStorage.getItem('element-id') --> key of the user input in local storage 
//if there is a value for that key in localStorage, put it in the html textarea element so when i refresh the page, the user input will display
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
      // document.getElementById(timeBlockId).textContent = parsedUserInput;
    }

    // if (retrievedUserInput) {
    // }

    // document.getElementById(retrievedUserInput).addEventListener;
    //   var parsedUserInput = JSON.parse(retrievedUserInput);
    //   console.log(parsedUserInput)
    // var element = document.getElementById(timeBlockId);
  })
}

$(document).ready(function() {
  var formattedDate = currentDate.format('MMMM D, YYYY')

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
