import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/body/Home";
import Navbar from "./component/Navbar/Navbar";
import Aboutus from "./component/body/Aboutus";
import Footer from "./component/footer/Footer";
import Shop from "./component/body/Shop";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/shop">
            <Navbar />
            <Shop />
            <Footer />
          </Route>
          <Route path="/aboutus">
            <Navbar />
            <Aboutus />
            <Footer />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
