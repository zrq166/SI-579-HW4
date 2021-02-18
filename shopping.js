const hideCompletedItem = () => {
    const completedItems = document.getElementsByClassName('completed');
    for (item of completedItems) {
        item.style.display = "none";
    }
}

const displayAll = () => {
    const completedItems = document.getElementsByClassName('completed');
    for (item of completedItems) {
        item.style.display = "list-item";
    }
}

const addItem = () => {
    const itemName = document.getElementById('item-name').value;
    const todoList = document.getElementById('todo-list');
    const newItem = document.createElement('li');
    newItem.textContent = itemName;
    todoList.appendChild(newItem);
}


const markItem = () => {
    const itemnum = document.getElementById('item-number-mark').value - 1;
    let thisItem = document.getElementsByTagName("li")[itemnum];
    thisItem.className = "completed";
}

const hide_complete_button = document.getElementById('hide-complete-button');
hide_complete_button.addEventListener('click', hideCompletedItem);

const all_button = document.getElementById('all-button');
all_button.addEventListener('click', displayAll);

const add_button = document.getElementById('add-button');
add_button.addEventListener('click', addItem);

const mark_button = document.getElementById('mark-button');
mark_button.addEventListener('click', markItem);