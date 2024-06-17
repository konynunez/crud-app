"use client";

import React, { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import { getAllTodos } from '../../api';
import { ITask } from "../../types/tasks";

const Home = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getAllTodos();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">To do List App</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}

export default Home;
