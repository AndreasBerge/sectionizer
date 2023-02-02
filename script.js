const inputText = document.querySelector("textarea");
const outputText = document.querySelector("#outputText");
const counter = document.querySelector("span");

/* TODO
min antall chars og punktum = avsnitt
*/

function sectionMaker(text) {
    const charList = [".", "!", "?"];
    let output = "";
    let charCount = 0;
    let charCountDisplay = 0;
    let paraCountDisplay = 1;
    for (let char of text) {
        if (char !== " ") {
            charCount++;
            charCountDisplay++;
        }
        if (charCount >= 500 && charList.includes(char)) {
            paraCountDisplay++;
            output = output + char + "<br><br>";
            outputText.textContent = output;
            charCount = 0;
        } else output = output + char;
    }
    counter.textContent = `${charCountDisplay} characters in ${paraCountDisplay} section(s)`;
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