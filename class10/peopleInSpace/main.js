

DOM.set({
    width: "30em",
    margin: "5em auto",
    H1: "People in space",
    main: {
        h2: "This is how many people are in space right now",
        section: {
            id: "listElement",
            display: "flex",
            flexWrap: "wrap",
            marginTop: "1em",
            height: "50em",
            backgroundColor: "wheat",
            // innerText: "some text",
        },
    },
});

async function loadPeople() {
    let response = await fetch("http://api.open-notify.org/astros.json");
    let json = await response.json();
    for (let person of json.people) {
        listElement.set({
            section: {
                margin: "1em",
                backgroundColor: "#ddd",
                padding: "0.5em",
                h3: person.name,
                p: "is stationed on the" + person.craft,
            }
        });
    };
};

loadPeople();



// fetch("http://api.open-notify.org/astros.json").then(response => {
//     console.log(response);
// });