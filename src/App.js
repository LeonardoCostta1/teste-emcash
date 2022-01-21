import "./App.css";
import Menu from "./Components/Menu";
import Routes from "./Routes";
import { BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Menu />
      <Routes/>
      </Router>
    </div>
  );
}

export default App;
