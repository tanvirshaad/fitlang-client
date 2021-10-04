import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';

function App() {
    return (
        <div>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/services">
                        <Services></Services>
                    </Route>
                    <Route path="/inventory">
                        <Inventory></Inventory>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
