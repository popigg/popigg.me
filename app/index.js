import './index.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { createHistory, useBasename } from 'history';
import { Router, Route } from 'react-router';
import Main from './components/main/main';
import About from './routes/about/about';
import Resume from './routes/resume/resume';
import Project from './routes/project/project';
import Inspire from './routes/inspire/inspire';
import Find from './routes/find/find';

const history = useBasename(createHistory)({
    basename: '/'
});

ReactDom.render(
    <Router history={history}>
        <Route path="/" component={Main}>
            <Route path="about.me" component={About} />
            <Route path="resu.me" component={Resume} />
            <Route path="project.me" component={Project} />
            <Route path="inspire.me" component={Inspire} />
            <Route path="find.me" component={Find} />
        </Route>
    </Router>
    , document.getElementById('content'));
