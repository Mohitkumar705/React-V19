import { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoData from "./TodoData";
import {getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";




const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;
    const ifTodoContentMatch = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatch) return;

    setTask((prev) => [...prev, { id, content, checked }]);
  };

  //todo addd data to localStorage
  setLocalStorageTodoData(task);

  //todo delete button
  const handleDeletebtn = (value) => {
    const upDatetask = task.filter((curTask) => curTask.content !== value);
    setTask(upDatetask);
  };

  //todo Clear All Button
  const handleClearAll = () => {
    setTask([]);
  };

  // todo handlechecked function
  const handleCheck = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.id === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <TodoData />
          <h2 className="Developer">Made with ❤️ by <strong className="str">Mohit Kumar</strong> </h2>
        </header>
        <TodoForm onAddTodo={handleFormSubmit} />
        <section className="myUnOrdList">
          <ul>
            {task.map((curTask) => {
              return (
                <TodoList
                  key={curTask.id}
                  data={curTask.content}
                  checked={curTask.checked}
                  onHandleDeleteTodo={handleDeletebtn}
                  onHandleCheckedTodo={handleCheck}
                />
              );
            })}
          </ul>
        </section>
        <section className="clear-btn" onClick={handleClearAll}>
          Clear all
        </section>
      </section>
    </>
  );
};

export default Todo;
