// TO DO
// 1. Create Rows with a save button
// 2. Title has the current Date & Time
// 3. Each row has a time block 
// 4. Each row has a save button
// 5. Each save button saved to Local storage

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));


var currentHour = moment().hour(); 



function hourTracker() {

    //get current number of hours.
    var currentHour = moment().hour();

$(".block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log( blockHour, currentHour)

    //Blocking out time for past time, the present, and future time
    if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
})
}

hourTracker();



$(document).ready(function () {

//Time Funciton
$(document).ready(function(){
   
    setInterval(function(){
        $("#date").text(moment().format('h:mm:ss a'));
    }, 1000);

    $(".saveBtn").on("click", function () {
        
        console.log(this);
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 

        //set items in local storage.
        localStorage.setItem(time, text);
        })

    })
})



