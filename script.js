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
        var value = $(".description").val();
        localStorage.setItem("#btn12pm", value);
    });
        
        $("#btn1pm").on("click", function () {
        var value = $(".description").val();
        localStorage.setItem("#btn1pm", value);
    });
        
        $("#btn2pm").on("click", function () {
        var value = $(".description").val();
        localStorage.setItem("#btn2pm", value);
    });

        $("#btn3pm").on("click", function () {
        var value = $(".description").val();
        localStorage.setItem("#btn3pm", value);
    });

        $("#btn4pm").on("click", function () {
        var value = $(".description").val();
        localStorage.setItem("#btn4pm", value);
    });

        $("#btn5pm").on("click", function () {
        var value = $(".description").val();
        localStorage.setItem("#btn5pm", value);
    });

//Function for the past, present, future
    function hourUpdate() {
        var currentDay = moment().format('h');
        var hour9 = parseInt("9");
        var hour10 = parseInt("10");
        var hour11 = parseInt("11");
        var hour12 = parseInt("12");
        var hour13 = parseInt("13");
        var hour14 = parseInt("14");
        var hour15 = parseInt("15");
        var hour16 = parseInt("16");
        var hour17 = parseInt("17");

//Function for the past, present, future
        if (currentDay < "#9am") {
            $(this).addClass("past");
        } else if (hours > currentDay) {
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
