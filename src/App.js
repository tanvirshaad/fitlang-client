import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Reviews from './components/Reviews/Reviews';

function App() {
    return (
        <div>
            {/* Routing  */}
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/services">
                        <Services></Services>
                    </Route>
                    <Route path="/reviews">
                        <Reviews></Reviews>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
