// TO DO
// 1. Create Rows with a save button
// 2. Title has the current Date & Time
// 3. Each row has a time block 
// 4. Each row has a save button
// 5. Each save button saved to Local storage




$(document).ready(function(){
   
    setInterval(function(){
        $("#date").text(moment().format('h:mm:ss a'));
    }, 1000);
})



