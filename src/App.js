import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Context from "./Context/Context";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Context>
        <Header />
        <Home />
      </Context>
    </>
  );
}

export default App;
