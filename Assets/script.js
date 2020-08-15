var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH");
var currentHoutInt = parseInt(currentHour);
//Current hour variable
var currentHour = moment().format("HH");

//Data attributes for each hour
$("9amRow").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));


//Starting jQuery
$(document).ready(function () {
    renderPlans();
    $("#currentDay").append();

    function addDate() {
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));
    } setInterval (addDate, 1000);

    //Change color
    for (var i = 0; i <= 12; i++) {
        //Variable for hour of the row and parse it
        var inputHour = $("#" + i + "Row").attr("data-time");
        var inputHourInt = parseInt(inputHour);
    }

});