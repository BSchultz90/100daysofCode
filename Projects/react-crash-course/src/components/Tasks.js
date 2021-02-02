import { useState } from "react";

const Tasks = () => {
  const [tasks];

  return (
    <>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
