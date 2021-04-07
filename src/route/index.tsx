import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import App from '../components/App';
import About from '../components/About';
import Users from '../components/Users';

const Routes = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </div>
    </Router>
);

export default Routes;
