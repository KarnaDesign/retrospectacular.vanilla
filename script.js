function bindColorButtons() {
    var colorButtons = document.querySelectorAll(".colorButtons > button");
    for (var i = 0; i < colorButtons.length; i++) {
        var button = colorButtons[i];
        button.addEventListener("click", (e) => {
            var currentlySelected = document.querySelector(".colorButtons > button.selected");
            currentlySelected.classList.remove("selected");
            var currentlyClicked = e.target;
            currentlyClicked.classList.add("selected");
        })
    }
}

function addCard() {
    var text = document.getElementById("cardText").value;
    var cardType = document.querySelector(".colorButtons > .selected").id;
    var deleteButton = document.createElement("p");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "x";
    deleteButton.setAttribute("title", "Remove this card");
    deleteButton.addEventListener("click", (e) => {
        var cardToDelete = e.target.parentNode;
        var cards = cardToDelete.parentNode;
        cards.removeChild(cardToDelete);
    })
    var paragraph = document.createElement("p");
    paragraph.innerText = text;
    var card = document.createElement("div");
    card.appendChild(deleteButton);
    card.appendChild(paragraph);
    card.classList.add("card");
    var columnSelector = "." + cardType + " .cards";
    var column = document.querySelector(columnSelector);
    column.appendChild(card);

}

function bindAddButton() {
    var addButton = document.getElementById("addColorButton");
    addButton.addEventListener("click", () => {
        addCard();
    })
}



bindColorButtons();
bindAddButton();