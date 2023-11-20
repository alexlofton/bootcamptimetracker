var currentDate = dayjs();
var currentHour = dayjs().hour();

function compareCurrentHour() {
  var timeBlockHours = document.querySelectorAll('.time-block')

  timeBlockHours.forEach(function(hour) {
    timeBlockId = hour.id

    var formattedBlockHour = parseInt(timeBlockId.slice(5))

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

      localStorage.setItem(timeBlockId, userInput)
    });
  })
})


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
