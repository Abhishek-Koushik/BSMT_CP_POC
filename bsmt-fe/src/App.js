import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import SideBar from "./SideBar";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Nav />
      <section className="page">
        <SideBar />
        <Main />
      </section>
    </div>
  );
}

export default App;
