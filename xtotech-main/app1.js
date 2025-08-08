if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.error('Service Worker registration failed:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const tasks = document.getElementById('tasks');
    const newTaskInput = document.getElementById('new-task');
    const addButton = document.getElementById('add-button');

    addButton.addEventListener('click', () => {
        const taskText = newTaskInput.value;
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            tasks.appendChild(listItem);
            newTaskInput.value = '';

            // You can add code here to save the task to some form of data store
        }
    });
});
