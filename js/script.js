const colors = ['#ff000000', '#ffa500', '#ffff00', '#008000',
    '#0000ff', '#00008b', '#800080', '#f70a0a59'
];

function renderColorPalette() {
    const paletteContainer = document.querySelector(".palette");
    const colorsItems = colors
        .map(color => {
            return `<button
              style="background-color: ${color}"
              class="palette-button"
              data-color="${color}"></button>`;
        })
        .join("");
    paletteContainer.innerHTML = colorsItems;
}

function handleClickOnColor(event) {
    const button = event.target.closest(".palette-button");
    if (!button) return;
    const oldActiveButton = document.querySelector(".palette-button-active");
    if (oldActiveButton) {
        oldActiveButton.classList.remove("palette-button-active");
    }
    button.classList.add("palette-button-active");
}

function setEventsOnFilledElements() {
    function handleMouseEnter() {
        this.classList.add("selected");
    }

    function handleMouseLeave() {
        this.classList.remove("selected");
    }

    function handleClick() {
        const currentColor = document.querySelector(".palette-button-active");
        if (!currentColor) {
            alert("Цвет не выбран");
            return;
        }
        this.style.fill = currentColor.dataset.color;
    }
    const elements = document.querySelectorAll("*[fill]");
    elements.forEach(element => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
        element.addEventListener("click", handleClick);
    });
}

document.addEventListener("DOMContentLoaded", renderColorPalette);
document.addEventListener("click", handleClickOnColor);
document.addEventListener("DOMContentLoaded", setEventsOnFilledElements);