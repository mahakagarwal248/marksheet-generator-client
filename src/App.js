import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Result from "./components/Result/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <Home />
            </div>
          }
        />
        <Route exact path="/result" element={<Result/>}/>
      </Routes>
    </Router>
  );
}

export default App;
