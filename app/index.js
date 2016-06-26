import './index.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { createHistory, useBasename } from 'history';
import { IndexRoute, Router, Route } from 'react-router';
import Main from './components/main';
import Home from './routes/home';
import About from './routes/about';
import Read from './routes/read';
import Jobs from './routes/jobs';
import Inspire from './routes/inspire';
import Contact from './routes/contact';

const history = useBasename(createHistory)({
    basename: '/~popigg/popigg.me'
});

ReactDom.render(
    <Router history={history}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
            <Route path="inspire" component={Inspire} />
            <Route path="jobs" component={Jobs} />
            <Route path="read" component={Read} />
            <Route path="contact" component={Contact} />
        </Route>
    </Router>
    , document.getElementById('content'));
