import * as React from 'react';
import './style.css';

export default function App() {
  const [list, setList] = React.useState([]);
  const [done, setDone] = React.useState([]);
  const [input, setInput] = React.useState('');

  function addTodo(todo: any) {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);
    // setList([...done, newTodo]);

    setInput('');
  }

  function deleteTodo(id) {
    const newList = list.filter((todo) => todo.id !== id);

    setDone(newList);
    setList(newList);
  }
  return (
    <div>
      <h1>React Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <hr />

      <ul>
        <div>Todos Left: {list.length}</div>
        {list.map((todo) => (
          <li>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        Done:{done.length}
        {done.map((todo) => (
          <li>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
}
