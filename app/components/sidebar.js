import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {
    render() {
        return (
            <aside className="sidebar col-xs-3">
                <nav>
                    <ul>
                      <li className="sidebar__listItem sidebar__listItem--noDecoration">
                        <span className="sidebar__icon sidebar__icon--inception">&nbsp;</span>
                        <Link to="/">Inception</Link>
                      </li>
                      <li className="sidebar__listItem sidebar__listItem--noDecoration">
                        <span className="sidebar__icon sidebar__icon--inspire">&nbsp;</span>
                        <Link to="/inspire">What Inspires me</Link>
                      </li>
                      <li className="sidebar__listItem sidebar__listItem--noDecoration">
                        <span className="sidebar__icon sidebar__icon--jobs">&nbsp;</span>
                        <Link to="/jobs">Pet Projects</Link>
                      </li>
                      <li className="sidebar__listItem sidebar__listItem--noDecoration">
                        <span className="sidebar__icon sidebar__icon--blog">&nbsp;</span>
                        <Link to="/read">Stories i like to tell</Link>
                      </li>
                      <li className="sidebar__listItem sidebar__listItem--noDecoration">
                        <span className="sidebar__icon sidebar__icon--contact">&nbsp;</span>
                        <Link to="/contact">Find me</Link>
                      </li>
                    </ul>
                </nav>
            </aside>
        )
    }
}

export default Sidebar;
