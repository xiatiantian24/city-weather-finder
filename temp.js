function colorUpdate(temp) {

    var colArr = [];
    //   https://stackoverflow.com/questions/27297824/setting-radial-gradient-with-javascript 
    var color;
    var bg;

    if (temp > 90) {

        // console.log("color combo 1")

        color = "#FFEEBC"
        bg = "#FDCD01"



    } else if (temp > 80) {

        // console.log("color combo 2")

        color = "#FCEDDA"
        bg = "#EE4E34"


    }
    else if (temp > 70) {

        color = "#FF69B4"
        bg = "#00FFFF"


    }

    else if (temp > 60) {

        color = "#F0DA5D"
        bg = "#7B145F"

    }
    else if (temp > 50) {

        color = "#CC9900"
        bg = "#FF1493"


    }
    else if (temp > 40) {

        color = "#E8630A"
        bg = "#8AC1C1"

    }
    else if (temp > 30) {

         color = "#3C41E5"
        bg = "#CEB0FA"

    }
    else if (temp > 20) {

        color = "#CCF381"
        bg = "#4831D4"

    }
    else if (temp > 10) {

        color = "#CEF2F2"
        bg = "#012E40"

    }
    else {

        color = "#7A2048"
        bg = "#1E2761"

    }

    colArr[0] = color;
    colArr[1] = bg


    return colArr;
}

function colorFunction(temp) {

    var HSVcol = map(temp, -20, 110, 0, 360)

    return HSVcol;

}