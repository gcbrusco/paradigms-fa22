function toCelsius() {

    // grabs the input from the user
    let input = document.getElementById("temperature").value;

    if (isNaN(input)) {
        document.getElementById("result-parent").innerText = "Please input a valid number!";
        document.getElementById("result-parent").style.color = "red";
        document.getElementById("result-parent").style.fontWeight = "bold";

    } else {
        // converts the temperature to C
        let celsius = (input - 32) * 5 / 9;

        // show back to the user, on the <span> element
        document.getElementById("result").innerText = celsius;
    }

    // makes the div visible
    // element.style can be used to change CSS properties of an HTML document
    document.getElementById("result-parent").style.visibility = "visible";
}