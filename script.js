function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const ul = document.getElementById('taskList');
    
    // Create list item
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;

    ul.appendChild(li);
    input.value = ""; // Clear input after adding
}

function removeTask(button) {
    const li = button.parentElement;
    li.style.opacity = '0';
    setTimeout(() => {
        li.remove();
    }, 300);
}

// Allow "Enter" key to add task
document.getElementById('taskInput')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});