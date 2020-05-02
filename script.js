
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
    // function hourUpdate() {
    //     var currentDay = moment().format('h');
    //     console.log(currentDay);
    //     $('#currentDay').append(currentDay);

    //     var hours = 

    //     if (currentDay < 9am) {
    //         $(this).addClass("past");
    //     } else if (hours > currentDay) {
    //         $(this).addClass("future");
    //     } else {
    //         $(this).addClass("present");
    //     }
    // };
    // hourUpdate();

    // localStorage.getItem("#btn9am", value);
    // localStorage.getItem("#btn10am", value);
    // localStorage.getItem("#btn11am", value);
    // localStorage.setItem("#btn12pm", value);
    // localStorage.setItem("#btn1pm", value);
    // localStorage.setItem("#btn2pm", value);
    // localStorage.setItem("#btn3pm", value);
    // localStorage.setItem("#btn4pm", value);
    // localStorage.setItem("#btn5pm", value);

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
