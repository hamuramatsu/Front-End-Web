const countElementsPage = () => {
    // Check if the result element already exists in the div
    if (document.getElementById("numPageElements")) {
        return; // Exit if it already exists
    }
    // Count all paragraph tags on the page
    const numElements = document.getElementsByTagName("p").length;

    const div1Element = document.createElement("p"); // Create a "p" element
    div1Element.id = "numPageElements";          // Define element ID
    div1Element.textContent = `there are ${numElements} paragraph tags on this page`; // Define its text content
    document.getElementById("div1").appendChild(div1Element); // Insert the new element into the DOM

  };
  
  
  const countElementsFirst = () => {
    // Check if the result element already exists in the div
    if (document.getElementById("numFirstIdElements")) {
        return; // Exit if it already exists
    }
    // Count all paragraph tags inside of first id
    const numElements = document.querySelectorAll("#group1 p").length;

    const div2Element = document.createElement("p"); // Create a "p" element
    div2Element.id = "numFirstIdElements";          // Define element ID
    div2Element.textContent = `there are ${numElements} paragraph tags inside of the first id`; // Define its text content
    document.getElementById("div2").appendChild(div2Element); // Insert the new element into the DOM
  }

  const countElementsSecond = () => {
    // Check if the result element already exists in the div
    if (document.getElementById("numSecondIdElements")) {
        return; // Exit if it already exists
    }
    // Count all paragraph tags inside of second id
    const numElements = document.querySelectorAll("#group2 p").length;

    const div3Element = document.createElement("p"); // Create a "p" element
    div3Element.id = "numSecondIdElements";          // Define element ID
    div3Element.textContent = `there are ${numElements} paragraph tags inside of the second id`; // Define its text content
    document.getElementById("div3").appendChild(div3Element); // Insert the new element into the DOM
  }

  // Access buttons
  const buttonElement1 = document.getElementById("button1");
  const buttonElement2 = document.getElementById("button2");
  const buttonElement3 = document.getElementById("button3");
  // Listen to the "click" event
  buttonElement1.addEventListener("click", countElementsPage);
  buttonElement2.addEventListener("click", countElementsFirst);
  buttonElement3.addEventListener("click", countElementsSecond);
  
