class Tasks {
  static count = 0;
  taskList = [];

  createTask(title, description, priority, status) {
    const task = {
      id: Tasks.count++,
      title,
      description,
      priority,
      status,
    };
    this.taskList.push(task);
  }

  removeTask(id) {
    this.taskList = this.taskList.filter(el => el.id !== id);
  }

  getTaskById(id) {
    return this.taskList.find(el => el.id === id);
  }
}
