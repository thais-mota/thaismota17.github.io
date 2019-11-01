import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './pages/About';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Quotes from './pages/Quotes';

export default function App() {
    return (
        <BrowserRouter>
            {/* <Nav /> */}
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/about" component={About} />
                <Route path="/quotes" component={Quotes} />
                <Route path="/projects" component={Projects} />
            </Switch>
            <Footer />
        </BrowserRouter >
    );
}
