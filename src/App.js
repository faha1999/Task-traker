import './css/style.min.css';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'doctor appointment',
      day: 'reb 5th at 2.30 pm',
      reminder: true,
    },

    {
      id: 2,
      text: 'doctor appointment 2',
      day: 'reb 5th at 2.30 pm',
      reminder: true,
    },

    {
      id: 3,
      text: 'doctor appointment 3',
      day: 'reb 5th at 2.30 pm',
      reminder: false,
    },

    {
      id: 4,
      text: 'doctor appointment 4',
      day: 'reb 5th at 2.30 pm',
      reminder: false,
    },
  ]);

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task,
      ),
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
