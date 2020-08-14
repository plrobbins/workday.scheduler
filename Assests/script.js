var saveBtn = $(".saveBtn");
//Current hour variable
var currentHour = moment().format("HH");

//Data attributes for each hour
$("9amRow").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));