const content = document.querySelector("body");

const navBar = document.createElement("nav");
navBar.className = "navbar navbar-default";
content.append(navBar);

const div1 = document.createElement("div");
div1.className = "container-fluid";
navBar.append(div1);

const div2 = document.createElement("div");
div2.className = "navbar-header";
div1.append(div2);


const titel = document.createElement("h1");
titel.style.fontSize = "30px";
titel.className = "navbar-brand";
div2.append(titel);

const s = document.createElement("b");
s.innerHTML = "To do list";
titel.append(s);

const main = document.createElement("div");
main.className = "container";
content.append(main);


const ulCreate = document.createElement("ul");
ulCreate.id = "#ToDoList";
ulCreate.className = "list-group";
main.append(ulCreate);

let toDos = ["Wake up", "Eat breakfast", "Code"];

const deleteListItem = (i) => {
    toDos.splice(i, 1)
    renderList();
}

const updateListItem = (i) => {
    toDos[i] = prompt("Change the task");
    renderList();
}

const renderList = () => {
    ulCreate.innerHTML = ""
    for (let i = 0; i < toDos.length; i++) {
        const liList = document.createElement("li");
        liList.innerHTML = toDos[i];
        liList.id = "lists"
        liList.className = "list-group-item lead";
        ulCreate.append(liList);

        const div3 = document.createElement("div");
        div3.className = "text-right";
        liList.append(div3);

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.className = "deleteBtn btn btn-danger";
        deleteBtn.addEventListener('click', () => deleteListItem(i))
        div3.append(deleteBtn);

        const updateBtn = document.createElement("button");
        updateBtn.innerHTML = "Update";
        updateBtn.className = "updateBtn btn btn-primary";
        updateBtn.addEventListener('click', () => updateListItem(i))
        div3.append(updateBtn);
    }
}
renderList();

const input = document.createElement("input");
input.type = "text";
input.className = "form-control form-group";
input.id = "focusedInput"
input.placeholder = "Add task";
main.append(input);

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
btn.className = "btn btn-success"
main.append(btn);
btn.addEventListener('click', addToList);





