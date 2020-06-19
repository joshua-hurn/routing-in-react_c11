import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Films from "./Films";
import SingleFilm from "./SingleFilm";
import People from "./People";
import SinglePerson from "./SinglePerson";
import Home from "./Home";

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/films">Films</Link>
                    </li>
                    <li>
                        <Link to="/People">People</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/films/:id" component={SingleFilm} />
                <Route path="/films" component={Films} />
                <Route path="/people/:id" component={SinglePerson} />
                <Route path="/people" component={People} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    )
}

export default App