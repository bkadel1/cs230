document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Function to add a new task
    function addNewTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    }

    // Function to mark a task as completed
    function completeTask(event) {
        event.target.closest("li").classList.toggle("completed");
    }

    // Function to delete a task
    function deleteTask(event) {
        event.target.closest("li").remove();
    }

    // Event listeners
    addTaskButton.addEventListener("click", addNewTask);
    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addNewTask();
        }
    });
    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("complete")) {
            completeTask(event);
        } else if (event.target.classList.contains("delete")) {
            deleteTask(event);
        }
    });
});
