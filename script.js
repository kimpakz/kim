const crudForm = document.getElementById('crud-form');
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item');

let items = [];

// Function to render the item list
function renderItems() {
    itemList.innerHTML = '';
    items.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${item}</span>
            <button class="edit" onclick="editItem(${index})">Edit</button>
            <button onclick="deleteItem(${index})">Delete</button>
        `;
        itemList.appendChild(listItem);
    });
}

// Function to add a new item
function addItem(event) {
    event.preventDefault();
    const newItem = itemInput.value.trim();
    if (newItem) {
        items.push(newItem);
        itemInput.value = '';
        renderItems();
    }
}

// Function to edit an item
function editItem(index) {
    const updatedItem = prompt('Edit item:', items[index]);
    if (updatedItem !== null) {
        items[index] = updatedItem;
        renderItems();
    }
}

// Function to delete an item
function deleteItem(index) {
    items.splice(index, 1);
    renderItems();
}

// Event listener for form submission
crudForm.addEventListener('submit', addItem);

// Initial render of the item list
renderItems();

