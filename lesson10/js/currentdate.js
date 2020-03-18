//format Wednesday, 24 July 2020.
const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};

document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US',options);

//friday banner
var date, number
date = new Date();
number = date.getDay();

if ( number != 5 ){
    document.getElementById("fridaybanner").style="display:none;"
}



