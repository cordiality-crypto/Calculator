let str = "";

function identifyClicks() {
    $("div > div").click(function() {
        handleInput($(this).text());
    });
}

function handleInput(text) {
    if (text == "CLEAR") {
        str = "";
        text = "";
    } else if (text == "=") {
        if (str.length > 0) {
            let result = calculate(str);
            str = "";
            text = result;
        }
    } else if (text == "÷") {
        str += "/";
    } else if (text == "×") {
        str += "*";
    } else {
        str += text;
        text = str; 
    }
    $("#output").text(text);
}

function calculate(expression) {
    try {
        let result = eval(expression);
        return isFinite(result) ? result : "Error";
    } catch (err) {
        return "Error";
    }
}

function identifyKeypress() {
    $(document).keydown(function(event) {
        let key = event.key;
        if (key >= '0' && key <= '9' || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
            handleInput(key);
        } else if (key === 'Enter') {
            handleInput("=");
        } else if (key === 'Backspace' || key === 'Delete') {
            handleInput("CLEAR");
        }
    });
}

$(document).ready(() => {
    identifyClicks();
    identifyKeypress();
});
