import Header from "./components/Header";

function App() {
  return (
    <div class="container">
      <Header />
    </div>
  );
}

Header.defaultProps = {
  title: "Hello There",
};

export default App;
