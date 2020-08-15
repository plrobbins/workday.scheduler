var saveBtn = $(".saveBtn");
//Current hour variable
var currentHour = moment().format("HH");
var currentHoutInt = parseInt(currentHour);

//Data attributes for each hour
$("9AMRow").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));


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

        if (currentHourInt === inputHourInt) {
            $("#" + i + "Row").addClass("present");
        }
        if (currentHourInt > inputHourInt) {
            $("#" + i + "Row").addClass("past");
        }
        if (currentHourInt < inputHourInt) {
            $("#" + i + "Row").addClass("future");
        }
    }

    //Saves data to local storage
    saveBtn.on("click", function () {
        var rowHour = $(this).attr("data-hour");
        var input = $("#" + rowHour + "Row").val();
        localStorage.setItem(rowHour, input);
    });

    //
    function renderPlans() {
        for (var i = 0; i <= 12; i++) {
        $("#" + i + "Row").val(localStorage.getItem(i));
        }
      }

});