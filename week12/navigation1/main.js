

async function loadContent(url, element) {
    const response = await fetch(url);
    const data = await response.text();
    element.innerHTML = data;
}

loadContent("./pages/header.html", mainContent);
loadContent("./pages/nav.html", mainContent);
loadContent("./pages/footer.html", mainContent);

function markLinkSelected(link) {
    link.classlist.add("selected");
}