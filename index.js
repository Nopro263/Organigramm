const children = document.querySelectorAll(".parent");

children.forEach((parent) => {
    const element = parent.querySelector(".element");
    const child = parent.querySelector(".children");
    
    if(child.children.length === 0) {
        return;
    }

    child.classList.add("clickable");

    element.addEventListener("click", () => {
        child.classList.toggle("hidden");
    });
});