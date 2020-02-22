function windchilloperation() {
    var avgtmp = 28; //t - average temp in f
    var windspeed = 5; //s - windspeed in miles

    if (avgtmp <= 50 && windspeed >= 5) {

    var windchillcal = 35.74 + 0.6215 * avgtmp - 35.75 * Math.pow(windspeed,0.16) + 0.4275 * avgtmp * Math.pow(windspeed,0.16);

    return windchillcal.toFixed(2) + "&#176;F";
    }

    else {
        return "N/A"
    }

}

document.getElementById("windchill").innerHTML = windchilloperation();
