import { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function App1() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [priority, setPriority] = useState("Medium");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    const newTask = { id: Date.now(), text: task, completed: false, editing: false, priority, dueDate: selectedDate.toISOString().split('T')[0] };
    setTodos((prev) => [...prev, newTask]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const handleEdit = (id) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, editing: !todo.editing } : todo)));
  };

  const handleSaveEdit = (id, newText) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, text: newText, editing: false } : todo)));
  };

  const handleDateClick = (date) => {
    setSelectedDate(new Date(date));
    setTask("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  const themeStyle = darkMode ? { backgroundColor: "#121212", color: "white" } : { backgroundColor: "#f5f7fa", color: "black" };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", minHeight: "100vh", ...themeStyle, display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h3>📝 My Daily Tasks</h3>
        <button onClick={() => setDarkMode((prev) => !prev)} style={{ marginBottom: "20px", padding: "10px 20px", borderRadius: "8px", border: "none", backgroundColor: darkMode ? '#ccc' : '#007bff', color: darkMode ? 'black' : 'white' }}>Toggle {darkMode ? 'Light' : 'Dark'} Mode</button>

        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder={`Enter your task for ${selectedDate.toISOString().split('T')[0]}...`}
            style={{ padding: "12px", width: "300px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <button type="submit" style={{ padding: "12px 24px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>Add Task</button>
        </form>

        <div style={{ marginTop: "20px", display: "flex", gap: "8px" }}>
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
          <button onClick={() => setFilter("pending")}>Pending</button>
        </div>

        <ul style={{ padding: 0, listStyle: "none", marginTop: "20px" }}>
          {filteredTodos.map((todo) => (
            <li key={todo.id} style={{ backgroundColor: "white", padding: "16px", marginBottom: "10px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {todo.editing ? (
                <input
                  type="text"
                  defaultValue={todo.text}
                  onBlur={(e) => handleSaveEdit(todo.id, e.target.value)}
                  autoFocus
                />
              ) : (
                <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text} - {todo.priority} Priority - Due: {todo.dueDate}</span>
              )}
              <div>
                <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
                <button onClick={() => handleEdit(todo.id)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 0.5 }}>
        <h3>📅 Calendar</h3>
        <Calendar onChange={handleDateClick} value={selectedDate} />
      </div>
    </div>
  );
}
