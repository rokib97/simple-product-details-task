import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Context from "./Context/Context";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Context>
        <Home />
      </Context>
    </>
  );
}

export default App;
