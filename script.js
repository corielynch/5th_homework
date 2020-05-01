//Current day variable
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').append(currentDay);

//Function for the past (gray)
var hours = date("H");

if (currentDay < "") {
    document.body.style.backgroundColor = "#d3d3d3";
} else if (currentDay > "") {
    document.body.style.backgroundColor = "#77dd77";
} else {
    document.body.style.backgroundColor = "#ff6961";
}


//NOT FINISHED Local Storage saving of input info
var input = localStorage.getItem("textarea");

addButton.addEventListener("click", function() {

  localStorage.setItem("count", count);
});

subtractButton.addEventListener("click", function() {

  localStorage.setItem("count", count);
});
