const tasks = [
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
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
