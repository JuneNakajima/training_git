const tasksList = [];

const onClickButton = () => {
    const name = document.querySelector("#name");
    const task = document.querySelector("#task");

    /* getElementByIDのほうが早いらしい。＃はいるらしい*/
  
    tasksList.push({ name: name.value, task: task.value });
    tasksList.forEach((t, idx) => console.log(`${idx}: ${t.name}, ${t.task}`));
  };