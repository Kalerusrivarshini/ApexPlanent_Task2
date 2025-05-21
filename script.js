// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("All fields are required!");
      return;
    }

    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address.");
      return;
    }

    alert("Message sent successfully!");
    form.reset();
  });
});

// To-Do List Functions
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  const list = document.getElementById("taskList");

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    ${task}
    <button onclick="removeTask(this)">Delete</button>
  `;
  list.appendChild(li);
  taskInput.value = "";
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}
