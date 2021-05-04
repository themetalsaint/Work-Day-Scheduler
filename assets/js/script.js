// TO DO
// 1. Create Rows with a save button
// 2. Title has the current Date & Time
// 3. Each row has a time block 
// 4. Each row has a save button
// 5. Each save button saved to Local storage

$("#block8 .description").val(localStorage.getItem("block8"));
$("#block .description").val(localStorage.getItem("block9"));
$("#block10 .description").val(localStorage.getItem("block10"));
$("#block11 .description").val(localStorage.getItem("block11"));
$("#block12 .description").val(localStorage.getItem("block12"));
$("#block1 .description").val(localStorage.getItem("block1"));
$("#block2 .description").val(localStorage.getItem("block2"));
$("#block3 .description").val(localStorage.getItem("block3"));
$("#block4 .description").val(localStorage.getItem("block4"));
$("#block5 .description").val(localStorage.getItem("block5"));


var currentHour = moment().hour(); 



function hourTracker() {

    //current number of hours.
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
        $("#date").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);

    $(".saveBtn").on("click", function () {
        
        console.log(this);
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 
        console.log(time, text)
        //set items in local storage.
        localStorage.setItem(time, text);
        })

    })
    
})



