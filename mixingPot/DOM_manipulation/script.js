const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const pTag = document.createElement("a");
pTag.style.color = "red"
pTag.textContent = "Hey I'm red!"

container.appendChild(pTag);

const containerDiv = document.createElement("div");
containerDiv.style["background-color"] = "pink";
containerDiv.style.border = "2px solid black";

const h1Scream = document.createElement("h1");
h1Scream.textContent = "I'm in a div";

const pScream = document.createElement("p");
pScream.textContent = "ME TOO!";

containerDiv.appendChild(h1Scream)
containerDiv.appendChild(pScream)

container.appendChild(containerDiv)
