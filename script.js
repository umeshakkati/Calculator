function appendValue(value) {
    document.getElementById("inputBox").value += value;
}

function clearLast() {
    let input = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = input.slice(0, -1);
}

function clearAll() {
    document.getElementById("inputBox").value = "";
}

function calculateResult() {
    try {
        document.getElementById("inputBox").value = eval(document.getElementById("inputBox").value);
    } catch {
        document.getElementById("inputBox").value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/".includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        clearLast();
    } else if (key === "Escape") {
        clearAll();
    }
});