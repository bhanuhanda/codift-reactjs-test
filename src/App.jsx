import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Posts from './components/posts';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/'><Posts /></Route>
                <Route><h2>Page Not Found</h2></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
