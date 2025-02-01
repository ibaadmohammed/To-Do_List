//Select DOM elements
const addTaskBtn =
document.getElementById('addTaskBtn');
const taskInput =
document.getElementById('taskInput');
const taskList =
document.getElementById('tasklist');

//Function to add a task
function addTask() {
    const taskText =
    taskInput.ariaValueMax.trim();
    if(taskTest) {
        const li =
        document.createElement('li');
        li.innerHTML =
        $taskText}
        <button
        class="deleteBtn">Delete</button>;
        taskList.appendChild(li);
        taskInput.value ='';
        taskInput.focus();
    }
    //Function to delete a task
    function deleteTask(event) {
        if(event.target.classList.contains('deleteBtn')) {
            const li =
            event.target.parentElement;
            taskList.removeChild(li);
        }
    }
    //Event listeners
    addTaskBtn.addEventListener('click',addTask);
    taskInput.addEventListener('keypress',function(event) {
    if(event.key === 'Enter') {
        addTask();
    }
});
taskList.addEventListener('click',deleteTask);     
