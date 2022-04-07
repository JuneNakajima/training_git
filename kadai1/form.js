const tasksList = [];

//TasksListにそれぞれをプッシュして、中身をコンソールにforEachで表示
const onClickButton = () => {
    const name = document.querySelector("#name");
    const task = document.querySelector("#task");

    /* getElementByIDのほうが早いらしい。＃はいるらしい*/
  
    tasksList.push({ name: name.value, task: task.value });
    tasksList.forEach((t, idx) => console.log(`${idx}: ${t.name}, ${t.task}`));
  };



  //表の生成(Pas正しい)
  function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[-1];

      // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  //creating all cells 
  tasksList.forEach((task) => {
    const row = document.createElement("tr");

    tasksList.forEach((task) =>{
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`${t.name}, ${t.task}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
    });

        // add the row to the end of the table body
        tblBody.appendChild(row);
  });

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(row);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border",);
  };

  // 参考；https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces


  /* //表を生成（Pas正しい）
const taskList = document.getElementById("taskList");

 // 配列の中のオブジェクトの数だけ処理を繰り返す
 tasksList.forEach((tasks) => {
    const tr = document.createElement("tr");  
    taskList.appendChild(tr);
    const objArray = Object.entries(tasks);  // オブジェクトを配列に
    objArray.forEach((arr) => {
      const td = document.createElement("td");
      td.textContent = arr[1];
      tr.appendChild(td);
    });
  }); */