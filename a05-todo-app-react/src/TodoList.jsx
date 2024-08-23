import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {

    const [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isFinsih: false }]);
    const [newTodo, setNewTodo] = useState("");

    const addTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isFinsih: false }]
        });
        setNewTodo("");
    }

    const updateTaskValue = (event) => {
        setNewTodo(event.target.value);
    }
    const deleteTask = (id) => {
        setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id));

    }

    const upperCaseAll = () => {
        setTodos(todos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase(),
            }

        }));
    }

    const upperCaseOne = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                }
            } else {
                return {
                    ...todo,
                }
            }
        }));
    }

    const markAll = () => {
        setTodos(todos.map((todo) => {
            return {
                ...todo,
                isFinsih: true,
            }

        }));
    }
    const markOne = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isFinsih: true,
                }
            } else {
                return {
                    ...todo,
                }
            }

        }));
    }


    return (
        <div>
            <div>
                <input type="text" placeholder="Enter task" value={newTodo} onChange={updateTaskValue} /><br />
                <button onClick={addTask}>add</button>
            </div>
            <h1>Todo Lists</h1>
            <ul>
                {
                    todos.map((todo) =>
                        <li key={todo.id} >
                            <span style={todo.isFinsih ? { textDecorationLine: "line-through" } : {}}>{todo.task}</span>
                            <button onClick={() => deleteTask(todo.id)}>delete</button>
                            {/* <button onClick={() => upperCaseOne(todo.id)}>UpperCase</button> */}
                            <button onClick={() => markOne(todo.id)}>Mark</button>
                        </li>
                    )
                }
            </ul>
            <br /><br />

            {/* <button onClick={upperCaseAll}>UpperCase All</button><br /> */}
            <button onClick={markAll}>Mark All</button>
        </div>
    )
}