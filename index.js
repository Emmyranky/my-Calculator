const display = document.getElementById("display");
const buttons =document.querySelectorAll("button");
let currentInput ="0";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (btn.classList.contains("clear")) {
            currentInput ="0";
        } else if (btn.classList.contains("back")) {
            currentInput = currentInput.slice(0, -1) || "0";
        } else if (btn.classList.contains("equal")) {
            try{
                currentInput = eval(currentInput).toString();
            } catch{
                currentInput = "Error";
            }
        } else {
            if(currentInput === "0" && !isNaN(value)) {
                currentInput = value;
            } else {
                currentInput += value;
            }
        }
        display.textContent = currentInput;
    });
});