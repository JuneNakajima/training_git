const taskList = [];

const onClickButton = () => {
    const name = document.getElementById("form").value;
    const task = document.getElementById("task").value;

    taskList.push({name: name.value, task: task.value});
    taskList.forEach((t, idx) => console.log(`${idx}: ${t.name}, ${t.task}`));
};