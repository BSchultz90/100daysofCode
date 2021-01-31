// Create a function that gets a random number from 1 to 10

function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}
//Instantiate a React Component that calls get num

class Numpicker extends React.Component {
  render() {
    const num = getNum();
    let msg;

    if (num === 7) {
      msg = (
        <div>
          <h2>Congratulations You've Won!!!</h2>
        </div>
      );
    } else {
      msg = <p>I'm Sorry but you've lost you got</p>;
    }
    return (
      <div>
        <h1>Your Number is: {num}</h1>
        {msg}
      </div>
    );
  }
}

ReactDOM.render(<Numpicker />, document.getElementById("root"));
