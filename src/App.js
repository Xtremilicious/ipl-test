import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import DashboardFiltered from "./pages/DashboardFiltered";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/filtered">
            <DashboardFiltered />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
