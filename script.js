

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addNewItem);
    taskList.addEventListener("click", deleteItem);
    btnDeleteAll.addEventListener("click", deleteAllItem);
}

function addNewItem(e) {

    if (input.value === "") {
        alert("Add a text")
    }

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>'

    li.appendChild(a);

    taskList.appendChild(li);

    input.value = "";


    e.preventDefault();
}

function deleteItem(e) {

    if (confirm("Elemanı silmek istiyor musunuz")) {
        if (e.target.className === "fas fa-times") {
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}

function deleteAllItem(e) {

    if (confirm("Tüm elemanları silmek istediğinize emin misiniz?")) {

        //         taskList.childNodes.forEach(function(item){
        //             if(item.nodeType == 1){
        //                 item.remove();
        //             }
        //         })
        //    }

        taskList.innerHTML = "";
    }
}



