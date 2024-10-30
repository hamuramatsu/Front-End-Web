
addButton.onclick = function() {
    addNewPet();
};

function validateInput(inputElt) {
    if(inputElt.value.trim().length === 0) {
        inputElt.classList.add("error");
        return false;
    } else {
        inputElt.classList.remove("error");
        return true;
    }
}

function addNewPet() {

    if(!validateInput(nameInput)){
        return;
    }
    if(!validateInput(ageInput)){
        return;
    }
    if(!validateInput(pictureInput)){
        return;
    }

    let petSection = document.createElement('section');
    

    petSection.innerHTML += `
    <section>
        <h2>${nameInput.value}</h2>
        <img src="${pictureInput.value}" alt="${nameInput.value}'s picture">
        <p>${nameInput.value} is ${ageInput.value} years old</p>
    </section>
    `;
    let removeButton = document.createElement('button');
    removeButton.innerText = "Remove";
    removeButton.onclick = function(){
        petSection.remove();
    }
    petSection.append(removeButton);

    petsGalleryMain.append(petSection);

    clearForm();
}

function clearForm() {
    nameInput.value = '';
    ageInput.value = '';
    pictureInput.value = '';
}