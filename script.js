// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task (this is where our earlier code goes)
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create the list item (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add click event to remove button
        removeButton.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Add the new task to the list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event listeners
    addButton.addEventListener('click', addTask);

    // Allow pressing "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
