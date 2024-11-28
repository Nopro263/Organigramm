const getJSON = async (url) => {
    let response = await fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });

    let data = await response.json();
    return data;
}




const root = document.querySelector("#organigramm");
const data = await getJSON("/old/data.json");

root.classList.add("wrapper");

const createList = (level, currentElement) => {
    console.log(level, currentElement);

    const title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = level.title;

    const levels = document.createElement("div");
    levels.classList.add("levels");
    levels.style.setProperty("--levels", level.list.length);

    currentElement.appendChild(title);
    currentElement.appendChild(levels);

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.classList.add("list");
    levels.appendChild(wrapper);

    level.list.forEach((v) => {
        const text = document.createElement("h1");
        text.classList.add("title");
        text.innerText = v;
        wrapper.appendChild(text);
    })
}

const createLevel = (level, currentElement) => {
    const title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = level.title;

    if(!level.levels) {
        createList(level, currentElement);
        return;
    }

    const levels = document.createElement("div");
    levels.classList.add("levels");
    levels.style.setProperty("--levels", level.levels.length);

    currentElement.appendChild(title);
    currentElement.appendChild(levels);

    level.levels.forEach((v) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        levels.appendChild(wrapper);
        createLevel(v, wrapper);
    });
}

createLevel(data, root);