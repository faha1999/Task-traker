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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
