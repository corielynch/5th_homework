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
        
        var hour9 = parseInt($(".description9am"));
        var hour10 = parseInt($(".description10am"));
        var hour11 = parseInt($(".description11am"));
        var hour12 = parseInt($(".description12pm"));
        var hour13 = parseInt($(".description1pm"));
        var hour14 = parseInt($(".description2pm"));
        var hour15 = parseInt($(".description3pm"));
        var hour16 = parseInt($(".description4pm"));
        var hour17 = parseInt($(".description5pm"));       

//If, else statements for the past, present, future
        if (hour9 < currentDay) {
            $(this).addClass("past");
        } else if (hour9 > currentDay) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }

        if (hour10 < currentDay) {
            $(this).addClass("past");
        } else if (hour10 > currentDay) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }

        if (hour11 < currentDay) {
            $(this).addClass("past");
        } else if (hour11 > currentDay) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
        
        if (hour12 < currentDay) {
            $(this).addClass("past");
        } else if (hour12 > currentDay) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }

        if (hour13 < currentDay) {
            $(this).addClass("past");
        } else if (hour13 > currentDay) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }

        if (hour14 < currentDay) {
            $(this).addClass("past");
        } else if (hour14 > currentDay) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }

        if (hour15 < currentDay) {
            $(this).addClass("past");
        } else if (hour15 > currentDay) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }

        if (hour16 < currentDay) {
            $(this).addClass("past");
        } else if (hour16 > currentDay) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }

        if (hour17 < currentDay) {
            $(this).addClass("past");
        } else if (hour17 > currentDay) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
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
