"use client"
import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import Background from "./components/background/background";
import Foreground from "./components/foreground/foreground";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import AddTaskBtn from "./components/buttons/addTaskBtn";
import AddTaskForm from "./components/form/addTaskForm";

export default function Home() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("taskList") || "[]");
    setTaskList(savedTasks);
  }, []);

  const saveToLocalStorage = (e: FormEvent) => {
    e.preventDefault();
    const updatedList = [...taskList, task];
    localStorage.setItem("taskList", JSON.stringify(updatedList));
    setTaskList(updatedList);
    setTask("");
  };

  const deleteFromLocalStorage = (taskToDelete: string) => {
    const updatedList = taskList.filter((t) => t !== taskToDelete);
    localStorage.setItem("taskList", JSON.stringify(updatedList));
    setTaskList(updatedList);
  };

  return (
    <div className="">
      <main className="">
        <Background />
        <h1 className="title"> Witchy doings </h1>

        <div className="tasklist-container">
          <ul className="tasklist">
            {taskList.map((task, index) => (
              <li key={index} className="tasklist__task">
                {task}
                <button
                  className="tasklist__remove-btn"
                  onClick={() => deleteFromLocalStorage(task)}
                >
                          <FontAwesomeIcon icon={faTrash} />

                </button>
              </li>
            ))}
          </ul>
          
            <Foreground />

          <form className="addTaskForm" onSubmit={saveToLocalStorage}>
            <input
              className="addTaskForm__input"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="New task..."
            />
            <button className="addTaskForm__btn" type="submit">
              Add
            </button>
          </form>
        </div>

      </main>
    </div>
  );
}
