import { useState } from "react";


const TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState({});

    const handleInput = (value) => {
        setInputValue({id:value, content: value, checked: false} );
    };

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({id: "", content: "", checked: false});
    }
  return (
    <>
      <section className="form">
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                type="text"
                className="todo-input"
                autoComplete="off"
                value={inputValue.content}
                onChange={(event) => handleInput(event.target.value)}
              />
            </div>
            <div>
              <button type="submit" className="todo-btn">
                Add Task
              </button>
            </div>
          </form>
        </section>
    </>
  )
}

export default TodoForm
