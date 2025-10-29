import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function getTaskById(id) {
  if (typeof id !== "number") {
    const error = new Error("ID must be a number");
    error.status = 400;
    throw error;

  }
  let result = await taskRepository.findTaskById(id);
  if (result) return result;
  else {
    const error = new Error("Task not found");
    error.status = 404;
    throw error;

  }

}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
