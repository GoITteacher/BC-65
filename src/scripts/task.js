class TaskManager {
  static count = 0;
  taskList = [];

  createTask(title, description, priority) {
    const task = {
      id: TaskManager.count++,
      title,
      description,
      priority,
      image:
        'https://blog.logrocket.com/wp-content/uploads/2023/01/css-full-page-background.png',
    };
    this.taskList.push(task);
    return task;
  }

  removeTask(id) {
    this.taskList = this.taskList.filter(el => el.id !== id);
  }

  getTaskById(id) {
    return this.taskList.find(el => el.id === id);
  }
}
