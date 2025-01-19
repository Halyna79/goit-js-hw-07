const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

console.log("Imput element:", inputEl);
console.log("Output element:", outputEl);

inputEl.addEventListener("input", (event) => {
    const inputValue = event.target.value.trim();
    console.log("Current input value:", inputValue)

    outputEl.textContent = inputValue === "" ? "Anonymous" : inputValue;
    console.log("Updated output text:", outputEl.textContent);
});