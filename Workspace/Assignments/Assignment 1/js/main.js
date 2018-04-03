function navigationMenu () {
    var menu = document.createElement("div");
    menu.className = "nav-menu";
    var anchor = document.createElement("a");
    anchor.href = "index.html";
    anchor.id = "nav-item-home";
    anchor.textContent = "Home";
    
    menu.appendChild(anchor);
    
    var header = document.getElementById("title");
    insertAfter (menu, header);
}

function insertAfter (after, before) {
    before.parentNode.insertBefore(after, before.nextSibling);
}

function addFontStyles () {
    //<link href="https://fonts.googleapis.com/css?family=Arvo|Old+Standard+TT|Open+Sans" rel="stylesheet">
    var head = document.head;
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css?family=Arvo|Old+Standard+TT|Open+Sans";
    head.appendChild(link);
}

function globalWebsiteElements () {
    navigationMenu ();
    addFontStyles ();
}

globalWebsiteElements();