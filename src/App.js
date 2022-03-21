import logo from "./logo.svg";
import SearchBar from "./components/searchBar/searchBar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1 className="title">Search flight status</h1>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <SearchBar />
    </div>
  );
}

export default App;
