window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   document.getElementById("add-btn").addEventListener("click", addBtnClick);

   document.getElementById("new-task").addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
         addBtnClick();
      }
   });
}

function addBtnClick() {
   const taskInput = document.getElementById("new-task");
   const task = taskInput.value.trim();

   if (task === "") {
      return;
   }

   addTask(task);

   taskInput.value = "";
   taskInput.focus();
}

function addTask(task) {
   const li = document.createElement("li");
   li.innerHTML = `<span class="task-text">${task}</span><button class="done-btn">&#10006;</button>`;

   const ol = document.querySelector("ol");
   ol.appendChild(li);

   li.querySelector(".done-btn").addEventListener("click", removeTask);
}

function removeTask(event) {
   const li = event.target.parentNode;
   li.parentNode.removeChild(li);
}
