"use strict";
class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }
    addTodo(task, dueDate) {
        const newTodo = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate,
        };
        this.todos.push(newTodo);
    }
    completeTodo(id) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.completed = true;
        }
        else {
            console.error(`Todo with ID ${id} not found.`);
        }
    }
    removeTodo(id) {
        const index = this.todos.findIndex((todo) => todo.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
        else {
            console.error(`Todo with ID ${id} not found.`);
        }
    }
    listTodos() {
        return this.todos;
    }
    filterTodos(completed) {
        return this.todos.filter((todo) => todo.completed === completed);
    }
    updateTodo(id, newTask) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.task = newTask;
        }
        else {
            console.error(`Todo with ID ${id} not found.`);
        }
    }
    clearCompleted() {
        this.todos = this.todos.filter((todo) => !todo.completed);
    }
}
const todoList = new TodoList();
todoList.addTodo("Finish TypeScript project", new Date("2025-03-05"));
todoList.addTodo("Review legal cases", new Date("2025-03-10"));
todoList.completeTodo(1);
console.log(todoList.listTodos());
//# sourceMappingURL=index.js.map