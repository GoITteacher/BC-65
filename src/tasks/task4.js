/* 
Класс ToDoList: Создайте класс Task для представления задачи с полями title, description и completed. Затем реализуйте класс ToDoList, который будет хранить список задач и методы для добавления новых задач, отметки задачи как выполненной и вывода списка задач.
*/

class Task {
  constructor(title, description) {
    console.log('New Task');
    this.title = title;
    this.description = description;
    this.completed = false;
  }
  updateStatus(newStatus) {
    this.completed = newStatus;
  }
}

class ToDoList {
  static id = 0;
  listTasks = [];
  addNewTask(newTask) {
    newTask.id = ToDoList.id++;
    this.listTasks.push(newTask);
  }
  changeStatus(id) {
    this.listTasks.find(el => el.id === id)?.updateStatus(true);
  }
}

const task1 = new Task('do homework', 'finish homework');
const task2 = new Task('do work', 'start work');
const task3 = new Task('do clean', 'finish clean');

const toDoList = new ToDoList();
toDoList.addNewTask(task1);
toDoList.addNewTask(task2);
toDoList.addNewTask(task3);

toDoList.changeStatus(1);
console.log(toDoList);
