const inputText = document.querySelector("textarea");
const outputText = document.querySelector("#outputText");
const counter = document.querySelector("span");
const range = document.querySelector("input");

function sectionMaker(text) {
  const secLength = range.value;
  console.log(secLength);
  const charList = [".", "!", "?"];
  let output = "";
  let charCount = 0;
  let charCountDisplay = 0;
  let secCountDisplay = 1;
  for (let char of text) {
    if (char !== " ") {
      charCount++;
      charCountDisplay++;
    }
    if (charCount >= secLength && charList.includes(char)) {
      secCountDisplay++;
      output = output + char + "<br><br>";
      charCount = 0;
    } else output = output + char;
  }
  counter.textContent = `${charCountDisplay} characters in ${secCountDisplay} section(s)`;
  return (outputText.innerHTML = output);
}

function display() {
  if (!outputText.textContent) {
    counter.textContent = "";
  }
  if (inputText.value) {
    sectionMaker(inputText.value);
  }
}

document.querySelector("#refreshButton").addEventListener("click", () => {
  window.location.reload();
});

document.querySelector("#submitButton").addEventListener("click", () => {
  display();
});

range.addEventListener("change", () => {
  if (outputText.innerHTML.trim()) display();
});
