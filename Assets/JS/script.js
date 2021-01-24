$(document).ready(function(){
    const nine = $("#nineAM");
    const ten = $("#tenAM");
    const eleven = $("#elevenAM");
    const twelve = $("#twelvePM");
    const one = $("#onePM");
    const two = $("#twoPM");
    const three = $("#threePM");
    const four = $("#fourPM");
    const five = $("#fivePM");
    const save = $("span.fa-save");
    
    // const schedNine = $("div.nine");
    // const schedTen = $("div.ten");
    // const schedEleven = $("div.eleven");
    // const schedTwelve = $("div.twelve");
    // const schedOne = $("div.one");
    // const schedTwo = $("div.two");
    // const schedThree = $("div.three");
    // const schedFour = $("div.four");
    // const schedFive = $("div.five");
    const workDayHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    let weekDay = "";
    let month = "";
    let now = luxon.DateTime;
    let date = now.local();
    let hour = date.hour;
    

    let whatHour = function() {
        // switch (hour){
        //     case 9:
        //         schedNine.removeClass("future");
        //         schedNine.addClass('present');
        //         break;
        //     case 10:
        //         schedNine.removeClass("present");
        //         schedNine.addClass("past");
        //         schedTen.removeClass("future");
        //         schedTen.addClass("present");
        //         break;
        //     case 11:
        //         schedTen.removeClass("present");
        //         schedTen.addClass("past");
        //         schedEleven.removeClass("future");
        //         schedEleven.addClass("present");
        //         break;
        //     case 12:
        //         schedEleven.removeClass("present");
        //         schedEleven.addClass("past");
        //         schedTwelve.removeClass("future");
        //         schedTwelve.addClass("present");
        //         break;
        //     case 13:
        //         schedTwelve.removeClass("present");
        //         schedTwelve.addClass("past");
        //         schedOne.removeClass("future");
        //         schedOne.addClass("present");
        //         break;
        //     case 14:
        //         schedOne.removeClass("present");
        //         schedOne.addClass("past");
        //         schedTwo.removeClass("future");
        //         schedTwo.addClass("present");
        //         break;
        //     case 15:
        //         schedTwo.removeClass("present");
        //         schedTwo.addClass("past");
        //         schedThree.removeClass("future");
        //         schedThree.addClass("present");
        //         break;
        //     case 16:
        //         schedThree.removeClass("present");
        //         schedThree.addClass("past");
        //         schedFour.removeClass("future");
        //         schedFour.addClass("present");
        //         break;
        //     case 17:
        //         schedFour.removeClass("present");
        //         schedFour.addClass("past");
        //         schedFive.removeClass("future");
        //         schedFive.addClass("present");
        //         break;
        //     default:
        //         schedNine.removeClass("past");
        //         schedTen.removeClass("past");
        //         schedEleven.removeClass("past");
        //         schedTwelve.removeClass("past");
        //         schedOne.removeClass("past");
        //         schedTwo.removeClass("past");
        //         schedThree.removeClass("past");
        //         schedFour.removeClass("past");
        //         schedFive.removeClass("present");
        //         schedNine.addClass("future");
        //         schedTen.addClass("future");
        //         schedEleven.addClass("future");
        //         schedTwelve.addClass("future");
        //         schedOne.addClass("future");
        //         schedTwo.addClass("future");
        //         schedThree.addClass("future");
        //         schedFour.addClass("future");
        //         schedFive.addClass("future");
        //         $("textarea").val("");
        //         break;

        // }

        for (let i = 0; i < workDayHours.length; i++){
            let currentHour = "";

            switch (workDayHours[i]){
                case 9:
                    currentHour = "div.nine";
                    break;
                case 10:
                    currentHour = "div.ten";
                    break;
                case 11:
                    currentHour = "div.eleven";
                    break;
                case 12:
                    currentHour = "div.twelve";
                    break;
                case 13:
                    currentHour = "div.one";
                    break;
                case 14:
                    currentHour = "div.two";
                    break;
                case 15:
                    currentHour = "div.three";
                    break;
                case 16:
                    currentHour = "div.four";
                    break;
                case 17:
                    currentHour = "div.five";
            }

            if (hour <= 17 && workDayHours[i] < hour){
                $(currentHour).removeClass("future");
                $(currentHour).removeClass("present");
                $(currentHour).addClass("past");
            }
            else if (hour <= 17 && workDayHours[i] == hour){
                $(currentHour).removeClass("future");
                $(currentHour).removeClass("past");
                $(currentHour).addClass("present");
            }
            else if (hour <= 17 && workDayHours[i] > hour){
                $(currentHour).removeClass("present");
                $(currentHour).removeClass("past");
                $(currentHour).addClass("future");
            }
            else{
                $(currentHour).removeClass("present");
                $(currentHour).removeClass("past");
                $(currentHour).addClass("future");
                saveSchedule();

            }
        }
    }

    let saveSchedule = function(){

        localStorage.setItem("nineAM", nine.val());
        localStorage.setItem("tenAM", ten.val());
        localStorage.setItem("elevenAM", eleven.val());
        localStorage.setItem("twelvePM", twelve.val());
        localStorage.setItem("onePM", one.val());
        localStorage.setItem("twoPM", two.val());
        localStorage.setItem("threePM", three.val());
        localStorage.setItem("fourPM", four.val());
        localStorage.setItem("fivePM", five.val());
    };

    

    let setDay = function() {
        let today = date.weekday;

        switch (today) {
            case 0: 
                weekDay = "Sunday";
                break;
            case 1:
                weekDay = "Monday";
                break;
            case 2: 
                weekDay = "Tuesday";
                break;
            case 3:
                weekDay = "Wednesday";
                break;
            case 4:
                weekDay = "Thursday";
                break;
            case 5:
                weekDay = "Friday";
                break;
            case 6:
                weekDay = "Saturday";
                break;
        }

    }

    let setMonth = function() {
        let thisMonth = date.month;

        switch (thisMonth) {
            case 1:
                month = "January";
                break;
            case 2:
                month = "February";
                break;
            case 3:
                month = "March";
                break;
            case 4:
                month = "April";
                break;
            case 5:
                month = "May";
                break;
            case 6:
                month = "June";
                break;
            case 7:
                month = "July";
                break;
            case 8:
                month = "August";
                break;
            case 9:
                month = "September";
                break;
            case 10:
                month = "October";
                break;
            case 11:
                month = "November";
                break;
            case 12:
                month = "December";
                break;
        }
    }

    let displayDate = function(){
        $("#currentDay").text(weekDay + ", " + month + " " + date.day);
    }

    let getSchedule = function (){
        let getNine = localStorage.getItem("nineAM");
        let getTen = localStorage.getItem("tenAM");
        let getEleven = localStorage.getItem("elevenAM");
        let getTwelve = localStorage.getItem("twelvePM");
        let getOne = localStorage.getItem("onePM");
        let getTwo = localStorage.getItem("twoPM");
        let getThree = localStorage.getItem("threePM");
        let getFour = localStorage.getItem("fourPM");
        let getFive = localStorage.getItem("fivePM");

        if (getNine !== null){
            nine.val(getNine);
        }

        if(getTen !== null){
            ten.val(getTen);
        }

        if(getEleven !== null){
            eleven.val(getEleven);
        }

        if(getTwelve !== null){
            twelve.val(getTwelve);
        }

        if(getOne !== null) {
            one.val(getOne);
        }

        if(getTwo !== null){
            two.val(getTwo);
        }

        if(getThree !== null){
            three.val(getThree);
        }

        if(getFour !== null) {
            four.val(getFour);
        }

        if(getFive !== null) {
            five.val(getFive);
        }
    }

    let init = function(){
        getSchedule();
    }
    
    init();
    setDay();
    setMonth();
    displayDate();
    whatHour();

    save.on("click", saveSchedule);

    
}); 