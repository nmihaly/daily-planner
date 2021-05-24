var currentDayEl = document.querySelector("#currentDay");
var timeBlockEl = document.querySelector(".container");

// add current date to bottom of header
currentDayEl.textContent = moment().format('dddd, MMMM Do YYYY');

