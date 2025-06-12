let result = document.getElementById("res");
function solve(val) {
    result.value += val;
}
function clearScreen() {
    result.value = "";
}
function back() {
    result.value = result.value.slice(0, -1);
}
function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}