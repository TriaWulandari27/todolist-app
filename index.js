// 1. reference html element in js
const formTask = document.querySelector(".form-task");

// 2. menambahkan event listener di element input
formTask.addEventListener("submit", (event) => {
    event.preventDefault();

 // 3. reference html element input
 const inputform = document.querySelector(".input-form");
 console.log(inputform.value);

 // 4. reference html element ul wrapper list
 const wrapperList = document.querySelector(".task-list-wrapper");

 // 5. create <li> using js
 const tasklist = document.createElement("li");

 // 6. masukan input value ke <li>
 tasklist.innerHTML =inputForm.value;

 // 7. append <li> ke <ul>
 wrapperList.append(taskList);

});