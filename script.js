// TO DO
// 1. Create Rows with a save button
// 2. Title has the current Date & Time
// 3. Each row has a time block 
// 4. Each row has a save button
// 5. Each save button saved to Local storage


// var rightNow = 
// // Current Day & Time
// timeDisplayEL.text(rightNow) //wrap in function called displaytime 

// function displayTime(){

// }



// setInterval(displayTime, 1000)






// $(document).ready(function() {

var seconds = moment().format("ss")
var hours = moment().format("h")
var minutes = moment().format("mm")
var date = moment().format("MMMM Do YYYY")
var meridiem = moment().format("a")




$("#hours").html("<span class='show'>" + hours + "<span>");
$("#minutes").html("<span class='show'>" + minutes + "<span>");
$("#seconds").html("<span class='show'>" + seconds + "&nbsp <span>");
// $("#date").html("<span class='show'>" + date + "&nbsp <span>");


$("#date").append( date + " " )
$("#meridiem").append(meridiem)

function currentTime() {
    if (seconds !== moment().format("ss")){
        seconds = moment().format("ss");
        updateHtml("#seconds", seconds)
    }
    if (minutes !== moment().format("mm")){
        minutes = moment().format("mm");
        updateHtml("#minutes", minutes)
    }
    if (hours !== moment().format("h")){
        hours = moment().format("h");
        updateHtml("#hours", hours)
    }
    // if (date !== moment().format("MMMM Do YYYY")){
    //     date = moment().format("MMMM Do YYYY");
    //     updateHtml("#date", date)
    // }
    // if (meridiem !== moment().format("a")){
    //     meridiem = moment().format("a");
    //     updateHtml("#meridiem", meridiem)
    // }

    setTimeout(currentTime, 1000)
}


    function updateHtml(id, value){
        var timeEl= document.querySelector(id)


        timeEl.querySelector(".show").className = "hide";
        var span = document.createElement("span");
        span.className = "show";
        span.innerText= value;
        timeEl.appendChild(span);
    }



    currentTime()




// })




