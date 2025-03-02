interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
}
  
class TodoList{
  // Initialing the todos arr and the task's identifier: nextId
  private todos: TodoItem[] = [];
  private nextId: number = 1;
  
  // addTodo adds tasks with unique IDs, the task itself, due date and a marker (a boolean) to check if the task is completed.
  addTodo(task: string, dueDate: Date): void {
    const newTodo: TodoItem = {
      id: this.nextId++,
      task,
      completed: false,
      dueDate,
    };
    this.todos.push(newTodo);
  }
  
  // completeTodo it marks a task as complete
  completeTodo(id: number): void {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = true;
    } else {
      throw new Error(`Todo with ID ${id} not found.`)
    }
  }
  
  // removeTodo removes a task by ID
  removeTodo(id: number): void {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    } else {
      throw new Error(`Todo with ID ${id} not found.`);
    }
  }
  
  // Displays the todo list
  listTodos(): TodoItem[] {
    return this.todos;
  }
  
  // filters completed task
  filterTodos(completed: boolean): TodoItem[] {
    return this.todos.filter((todo) => todo.completed === completed);
  }
  
  // Updates todolist
  updateTodo(id: number, newTask: string): void {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.task = newTask;
    } else {
      throw new Error(`Todo with ID ${id} not found.`);
    }
  }
  
  // removes or clear all completed Tasks from list
  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }
}

// Usage
const todoList = new TodoList();
todoList.addTodo("Finish TypeScript project", new Date("2025-03-05"));
todoList.addTodo("Review legal cases", new Date("2025-03-10"));
todoList.completeTodo(1);
console.log(todoList.listTodos());
  