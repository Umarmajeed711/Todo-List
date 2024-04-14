#! /usr/bin/env node


// Todo list
import inquirer from "inquirer";

// create teh todo list variable.
let todoList: string[] = [];
let condition = true;

let main = async () => {
  while (condition) {
    let option = await inquirer.prompt([
      {
        name: "choice",
        message: "Plz select the option you want to do.",
        type: "list",
        choices: [
          "Add Task",
          "Delete Task",
          "Update Task",
          "View Todo list",
          "Exit",
        ],
      },
    ]);
    if (option.choice === "Add Task"){
      await addTask()
    }
    else if (option.choice === "Delete Task"){
      await DeleteTask()
    }
    else if (option.choice === "Update Task"){
      await UpdateTask()
    }
    else if (option.choice === "View Todo list"){
      await viewTask()
    }
    else if (option.choice === "Exit"){
      condition = false
    }
    
  }

};

// Fucntion to add a new task in Todo-list.
let addTask = async () => {
  let addNew = await inquirer.prompt({
    name: "Task",
    message: "Enter your new task:",
    type: "input",
  });
  todoList.push(addNew.Task)
  console.log(`'${addNew.Task}'  added successfully in your Todo-list.`);
};

// Function to view a task.
let viewTask = async () => {
  console.log("\nYour Todo-list");
  todoList.forEach((task , index) => {
    console.log(`${index + 1} : ${task}`)
  });
};


// Function to delete a task in Todo-list
let DeleteTask = async () => {
  await viewTask()
  let taskIndex = await inquirer.prompt({
    name:"index",
    message:"Enter the 'index no .' of the task which you want to delete.",
    type:"number"
  });
 
  let DeletedTask = todoList.splice(taskIndex.index-1,1)
  console.log(`\n'${DeletedTask}' has been deleted successfully from your Todo-list.`)
  
};

let UpdateTask = async () =>{
  viewTask()
  let update_task = await inquirer.prompt([
    {
      name:"index",
      message:"Enter the 'index no.' of the task which you want to update:",
      type:"number",
    },
    {
      name:"new_task",
      message:"Now enter new task:",
      type:"input"
    }
  ])
  
  todoList[update_task.index -1] = update_task.new_task
  
  console.log(`\n Task at index no  ${update_task.index} is updated successfully! [for Updated list plz check  [view Todo-list]`)
  }
  

main ()

