

let selectedLink;

function markSelected(link) {
    if(selectedLink !== undefined) {
        selectedLink.classList.remove("selected");
    }
    if(!link) {
        return;
    }
    link.classList.add("selected");
    selectedLink = link;
}

async function loadContent(url, element) {
    const response = await fetch(url);
    const data = await response.text();
    element.innerHTML = data;
}

loadContent("./pages/home.html", mainContent);

homeLink.onclick = () => {
    loadContent("./pages/home.html", mainContent);
    markSelected();
}

bioLink.onclick = () => {
    loadContent("./pages/bio.html", mainContent);
    bioLink.classList.add("selected");
    markSelected(bioLink);
}

contactLink.onclick = () => {
    loadContent("./pages/contact.html", mainContent);
    contactLink.classList.add("selected");
    markSelected(contactLink);
}

galleryLink.onclick = () => {
    loadContent("./pages/gallery.html", mainContent);
    galleryLink.classList.add("selected");
    markSelected(galleryLink);

}