document.getElementById("todo-input").addEventListener("mouseup", function () {
  const todoDiv = document.querySelector(".todo-input");
  const todoTitleInput = document.querySelector(".todo-title-input");
  const listButton = document.querySelector(".list-button");
  const closeButton = document.querySelector(".close-button");
  const saveButton = document.querySelector(".save-button");
  const descInput = document.querySelector("#todo-desc");

  todoTitleInput.placeholder = "Title";
  descInput.placeholder = "Take a note here...";
  descInput.style.display = "block";
  listButton.style.display = "none";
  closeButton.style.display = "block";
  saveButton.style.display = "block";
  todoDiv.style.minHeight = "120px";
});

function closeButton() {
  console.log("clicked close button");
  const todoDiv = document.querySelector(".todo-input");
  const todoTitleInput = document.querySelector(".todo-title-input");
  const listButton = document.querySelector(".list-button");
  const closeButton = document.querySelector(".close-button");
  const saveButton = document.querySelector(".save-button");
  const descInput = document.querySelector("#todo-desc");

  todoTitleInput.placeholder = "Take a note here...";
  descInput.style.display = "none";
  listButton.style.display = "inline-block";
  closeButton.style.display = "none";
  saveButton.style.display = "none";
  todoDiv.style.minHeight = "30px";
}
document
  .querySelector(".close-button")
  .addEventListener("mouseup", closeButton);

document.querySelector(".save-button").addEventListener("click", function () {
  const todoTitleInput = document.querySelector(".todo-title-input");
  const descInput = document.querySelector("#todo-desc");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  const isTodoAlreadyExitsWithTitle = todos.find(
    (todo) => todo.title === todoTitleInput.value
  );

  todos.push({
    title: todoTitleInput.value,
    desc: descInput.value,
    isDone: false,
  });

  localStorage.setItem("todos", JSON.stringify(todos));
  todoTitleInput.value = "";
  descInput.value = "";
  addTodosInTheDom();
  closeButton();
});

function addTodosInTheDom() {
  const container = document.querySelector(".all-todos-show");
  const todos = JSON.parse(localStorage.getItem("todos"));
  console.log(todos);

  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.setAttribute("class", "todo-card");

    const heading = document.createElement("h3");
    heading.innerText = todo.title;

    const desc = document.createElement("p");
    desc.innerText = todo.desc;

    div.append(heading, desc);
    container.append(div);
  });
}
addTodosInTheDom();
