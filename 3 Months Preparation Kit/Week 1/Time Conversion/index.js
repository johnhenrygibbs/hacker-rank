let sampleTestCase0 = "07:05:45PM";

function timeConversion(s) {

    let militaryTime = "";
    let array = s.split(":");

    // Edge cases handle 12 AM conversion, 12 PM conversion, and military time conversion after close of noon hour. If no conversion is needed, "AM" is removed upon return.

    if (array[0] == "12" && array[2].includes("AM")) {

        array[0] = "00";
        militaryTime = array.join(":").replace("AM", "");

    } else if (array[0] == "12" && array[2].includes("PM")) {

        militaryTime = array.join(":").replace("PM", "");

    } else if (Number(array[0]) < 12 && array[2].includes("PM")) {

        let number = Number(array[0]);
        number += 12;
        array[0] = number.toString();
        militaryTime = array.join(":").replace("PM", "");

    } else {

        militaryTime = array.join(":");

    }

    return militaryTime.replace("AM", "");

}

console.log(timeConversion(sampleTestCase0));