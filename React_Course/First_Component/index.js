const getMood = function () {
  const feelings = ["Happy", "Sad", "Indifferent"];
  return feelings[Math.floor(Math.random() * feelings.length)];
};

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>My Mood is {getMood()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById("root"));
