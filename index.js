// Array to store tasks
const tasks = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function () {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

tasks.push(newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"));
tasks.push(newTask("Do Laundry", "😨"));

tasks[0].logState(); // Clean Cat Litter has not been completed
tasks[0].markCompleted();
tasks[0].logState(); // Clean Cat Litter has been completed

console.log(tasks);
