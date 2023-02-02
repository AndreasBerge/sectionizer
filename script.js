const inputText = document.querySelector("textarea");
const outputText = document.querySelector("#outputText");
const counter = document.querySelector("span");

/* TODO
min antall chars og punktum = avsnitt
*/

function sectionMaker(text) {
    let output = "";
    let pointCount = 0;
    let charCount = 0;
    let paraCountDisplay = 1;
    for (let char of text) {
        if (char !== " ") charCount++;
        if (char === ".") {
            pointCount++;
        }
        if (pointCount >= 5 && charCount > 500 && char === ".") {
            paraCountDisplay++;
            output = output + char + "<br><br>";
            outputText.textContent = output;
            pointCount = 0;
        } else output = output + char;
    }
    counter.textContent = `${charCount} characters in ${paraCountDisplay} paragraph(s)`;
    return outputText.innerHTML = output;
}

document.querySelector("button").addEventListener("click", () => {
    if (!outputText.textContent) {
        counter.textContent = "";
    }
    if (inputText.value) {
        sectionMaker(inputText.value);
        inputText.value = "";
    }
})