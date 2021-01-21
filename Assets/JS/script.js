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

    let weekDay = "";
    let month = "";
    let now = luxon.DateTime;
    let date = now.local();

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

    save.on("click", function(){

        localStorage.setItem("nineAM", nine.val());
        localStorage.setItem("tenAM", ten.val());
        localStorage.setItem("elevenAM", eleven.val());
        localStorage.setItem("twelvePM", twelve.val());
        localStorage.setItem("onePM", one.val());
        localStorage.setItem("twoPM", two.val());
        localStorage.setItem("threePM", three.val());
        localStorage.setItem("fourPM", four.val());
        localStorage.setItem("fivePM", five.val());
    });
    
    init();
    setDay();
    setMonth();
    displayDate();

}); 