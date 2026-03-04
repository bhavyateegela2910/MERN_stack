//switch case(used in case of traffic signals)

function value(day){
switch(day){
    case "sunday":
        console.log("holiday");
        break;
    case "monday":
        console.log("working day");
        break;
    default:
        console.log("pratical");
}
}
value("monday")