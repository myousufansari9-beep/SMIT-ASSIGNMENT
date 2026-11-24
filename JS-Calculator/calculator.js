
function calculate(value) {

    if (value == "AC") {
        document.getElementById("display").value = "";
    }

    else if (value == "DEL") {
        document.getElementById("display").value =
        document.getElementById("display").value.slice(0, -1);
    }

    else if (value == "=") {
        document.getElementById("display").value =
        eval(document.getElementById("display").value);
    }

    else {
        document.getElementById("display").value += value;
    }
}
