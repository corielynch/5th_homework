//Function for on clicks of each time block
$(document).ready(function () {
    $("#btn9am").on("click", function () {
        var value = $(".description9am").val();
        localStorage.setItem("#btn9am", value)
    
    });
        $("#btn10am").on("click", function () {
            var value = $(".description10am").val();
            localStorage.setItem("#btn10am", value);
    });

        $("#btn11am").on("click", function () {
        var value = $(".description11am").val();
        localStorage.setItem("#btn11am", value);
    });

        $("#btn12pm").on("click", function () {
        var value = $(".description12pm").val();
        localStorage.setItem("#btn12pm", value);
    });
        
        $("#btn1pm").on("click", function () {
        var value = $(".description1pm").val();
        localStorage.setItem("#btn1pm", value);
    });
        
        $("#btn2pm").on("click", function () {
        var value = $(".description2pm").val();
        localStorage.setItem("#btn2pm", value);
    });

        $("#btn3pm").on("click", function () {
        var value = $(".description3pm").val();
        localStorage.setItem("#btn3pm", value);
    });

        $("#btn4pm").on("click", function () {
        var value = $(".description4pm").val();
        localStorage.setItem("#btn4pm", value);
    });

        $("#btn5pm").on("click", function () {
        var value = $(".description5pm").val();
        localStorage.setItem("#btn5pm", value);
    });

//Function for the past, present, future
    function hourUpdate() {
        var currentDay = moment().hours();

//Sets hour blocks equal to an integer
        var hour9 = $(".description9am");
        hour9 = 9;
        var hour10 = $(".description10am");
        hour10 = 10;
        var hour11 = $(".description11am");
        hour11 = 11;
        var hour12 = $(".description12pm");
        hour12 = 12;
        var hour13 = $(".description1pm");
        hour13 = 13;
        var hour14 = $(".description2pm");
        hour14 = 14;
        var hour15 = $(".description3pm");
        hour15 = 15;
        var hour16 = $(".description4pm");
        hour16 = 16;
        var hour17 = $(".description5pm");
        hour17 = 17;
              
//If, else statements for the past, present, future
        if (hour9 < currentDay) {
            $(".description9am").addClass("past");
        } else if (hour9 > currentDay) {
            $(".description9am").addClass("future");
        } else {
            $(".description9am").addClass("present");
        }

        if (hour10 < currentDay) {
            $(".description10am").addClass("past");
        } else if (hour10 > currentDay) {
            $(".description10am").addClass("future");
        } else {
            $(".description10am").addClass("present");
        }

        if (hour11 < currentDay) {
            $(".description11am").addClass("past");
        } else if (hour11 > currentDay) {
            $(".description11am").addClass("future");
        } else {
            $(".description11am").addClass("present");
        }
        
        if (hour12 < currentDay) {
            $(".description12pm").addClass("past");
        } else if (hour12 > currentDay) {
            $(".description12pm").addClass("future");
        } else {
            $(".description12pm").addClass("present");
        }

        if (hour13 < currentDay) {
            $(".description1pm").addClass("past");
        } else if (hour13 > currentDay) {
            $(".description1pm").addClass("future");
        } else {
            $(".description1pm").addClass("present");
        }

        if (hour14 < currentDay) {
            $(".description2pm").addClass("past");
        } else if (hour14 > currentDay) {
            $(".description2pm").addClass("future");
        } else {
            $(".description2pm").addClass("present");
        }

        if (hour15 < currentDay) {
            $(".description3pm").addClass("past");
        } else if (hour15 > currentDay) {
            $(".description3pm").addClass("future");
        } else {
            $(".description3pm").addClass("present");
        }

        if (hour16 < currentDay) {
            $(".description4pm").addClass("past");
        } else if (hour16 > currentDay) {
            $(".description4pm").addClass("future");
        } else {
            $(".description4pm").addClass("present");
        }

        if (hour17 < currentDay) {
            $(".description5pm").addClass("past");
        } else if (hour17 > currentDay) {
            $(".description5pm").addClass("future");
        } else {
            $(".description5pm").addClass("present");
        }
};
    hourUpdate();

//Saves input info to local storage
    $(".description9am").val(localStorage.getItem("#btn9am"));
    $(".description10am").val(localStorage.getItem("#btn10am"));
    $(".description11am").val(localStorage.getItem("#btn11am"));
    $(".description12pm").val(localStorage.getItem("#btn12pm"));
    $(".description1pm").val(localStorage.getItem("#btn1pm"));
    $(".description2pm").val(localStorage.getItem("#btn2pm"));
    $(".description3pm").val(localStorage.getItem("#btn3pm"));
    $(".description4pm").val(localStorage.getItem("#btn4pm"));
    $(".description5pm").val(localStorage.getItem("#btn5pm"));
});
