import './App.css';
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/"><News key="general" category={"general"} /></Route>
               <Route exact path="/business"><News key="business" category="business" /></Route>
               <Route exact path="/health"><News key="health" category="health" /></Route>
               <Route exact path="/science"><News key="science" category="science" /></Route>
               <Route exact path="/technology"><News key="technology" category="technology" /></Route>
               <Route exact path="/space"><News key="space" category="space" /></Route>
            </Switch>
        </Router>
    </>
  );
}

export default App;
