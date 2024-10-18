// let maxNum = 20;

let myNum = 10;
let myName = "Haley";

console.log("This page shows square values.")

pageHeading.innerHTML = "Hello: " + myName;

function squares(val) {
    for (let i=1; i<val; i++){
        // displayText.innerHTML += "<p>The square of " + i + " is: " + (i*i) + "</p>";
        displayText.innerHTML += `
        <p>
            The square of ${i} is: ${i*i}
        </p>
    `;
}
}

goButton.onclick = function() {
    displayText.innerHTML = "";
    squares(maxNumInput.value); 
}

clearButton.onclick = function() {
    maxNumInput.value = "";
    displayText.innerHTML = "";
}

bgColorInput.onchange = function() {
    document.body.style.backgroundColor = bgColorInput.value;
}

maxNumInput.onchange = function() {
    displayText.innerHTML = "";
    squares(maxNumInput.value); 
}