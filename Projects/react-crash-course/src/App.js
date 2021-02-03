import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30 PM",
    },
    {
      id: 2,
      text: "School Meeting",
      day: "Feb 5th at 3:30 PM",
    },
    {
      id: 3,
      text: "Some other Obligation",
      day: "Feb 5th at 4:30 PM",
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
