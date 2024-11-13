const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Create the delete button (×)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for the '×' symbol
        li.appendChild(span);

        // Append the new item to the list container
        listContainer.appendChild(li);

        // Save the updated list to localStorage
        saveData();
    }

    // Clear the input box after adding the task
    inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // Toggle the 'checked' class when the list item is clicked
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Remove the task when the × button is clicked
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    // Save the list content to localStorage
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    // Load the list content from localStorage and display it
    listContainer.innerHTML = localStorage.getItem("data");
}

// Load the tasks when the page loads
showTask();
