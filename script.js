//add current day at the top of the planner (moment)

let currentTime = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentTime);

let timeBlock = $(".hour");
let now = parseInt(moment().format("H"));

//function to check each hour block to see if it is past (gray), present (red), or future (green).
$.each(timeBlock, function(i, hour) {
    let hourId = parseInt($(this).attr("id"));
    if (hourId === now) {
        $(this).next().addClass("present");
    } else if (hourId < now) {
        $(this).next().addClass("past");
    } else if (hourId > now) {
        $(this).next().addClass("future");
    }
});

//text area, class = "event"; if Save button clicked, set item to local storage and persist; upon refresh, need to get item from local storage too

$(".saveBtn").on("click", function(event) {
    let calendarItem =
        event.target.parentElement.previousElementSibling.children[0].value;
    localStorage.setItem(event.target.attributes[0].value, calendarItem);
});

$(document).ready(function() {
    if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
        let nineAm = $("<p>" + localStorage["9am"] + "</p>");
        $("#nineAm").append(nineAm[0].innerText);
    } else {
        ("");
    }
    if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
        let tenAm = $("<p>" + localStorage["10am"] + "</p>");
        $("#tenAm").append(tenAm[0].innerText);
    } else {
        ("");
    }
    if (localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
        let elevenAm = $("<p>" + localStorage["11am"] + "</p>");
        $("#elevenAm").append(elevenAm[0].innerText);
    } else {
        ("");
    }
    if (localStorage["12pm"] !== null && localStorage["12pm"] !== undefined) {
        let twelvePm = $("<p>" + localStorage["12pm"] + "</p>");
        $("#twelvePm").append(twelvePm[0].innerText);
    } else {
        ("");
    }
    if (localStorage["1pm"] !== null && localStorage["1pm"] !== undefined) {
        let onePm = $("<p>" + localStorage["1pm"] + "</p>");
        $("#onePm").append(onePm[0].innerText);
    } else {
        ("");
    }
    if (localStorage["2pm"] !== null && localStorage["2pm"] !== undefined) {
        let twoPm = $("<p>" + localStorage["2pm"] + "</p>");
        $("#twoPm").append(twoPm[0].innerText);
    } else {
        ("");
    }
    if (localStorage["3pm"] !== null && localStorage["3pm"] !== undefined) {
        let threePm = $("<p>" + localStorage["3pm"] + "</p>");
        $("#threePm").append(threePm[0].innerText);
    } else {
        ("");
    }
    if (localStorage["4pm"] !== null && localStorage["4pm"] !== undefined) {
        let fourPm = $("<p>" + localStorage["4pm"] + "</p>");
        $("#fourPm").append(fourPm[0].innerText);
    } else {
        ("");
    }
    if (localStorage["5pm"] !== null && localStorage["5pm"] !== undefined) {
        let fivePm = $("<p>" + localStorage["5pm"] + "</p>");
        $("#fivePm").append(fivePm[0].innerText);
    } else {
        ("");
    }
});