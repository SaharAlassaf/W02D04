const content = document.querySelector("body");
const titel = document.createElement("h1");
titel.innerHTML = "To do list";
content.append(titel);

const ulCreate = document.createElement("ul");
ulCreate.id = "#ToDoList";
content.append(ulCreate);

let toDos = ["Wake up", "Eat breakfast", "Code"];

const deleteListItem = (i) => {
    toDos = toDos.filter((todo, index) => index !== i)
    renderList();
}

const updateListItem = (i) => {
    toDos[i] = prompt("Enter a number");
    renderList();
}

const renderList = () => {
    ulCreate.innerHTML = ""
    for (let i = 0; i < toDos.length; i++) {
        const liList = document.createElement("li");
        liList.innerHTML = toDos[i];
        liList.id = "lists"
        ulCreate.append(liList);

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.className = "deleteBtn";
        // deleteBtn.id = `del${i}`;
        deleteBtn.addEventListener('click', () => deleteListItem(i))
        liList.append(deleteBtn);

        const updateBtn = document.createElement("button");
        updateBtn.innerHTML = "Update";
        deleteBtn.className = "updateBtn";
        updateBtn.addEventListener('click', () => updateListItem(i))
        liList.append(updateBtn);
    }
}
renderList();

const input = document.createElement("input");
input.type = "text";
input.id = "#input"
content.append(input);

const addToList = (event) => {
    let text = input.value;
    if (input.value.length) {
        toDos.push(text);
        renderList();
        input.value = "";
    }
}

const btn = document.createElement("button");
btn.innerHTML = "Add";
content.append(btn);
btn.addEventListener('click', addToList);





