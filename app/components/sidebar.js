import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {
    render() {
        return (
            <aside className="sidebar col-xs-3">
                <nav>
                    <ul>
                      <li className="sidebar__listItem sidebar__listItem--noDecoration">
                        <Link to="/">
                          <span className="sidebar__icon sidebar__icon--inception">&nbsp;</span>
                          Inception
                        </Link>
                      </li>
                      <li className="sidebar__listItem sidebar__listItem--noDecoration">
                        <Link to="/inspire">
                          <span className="sidebar__icon sidebar__icon--inspire">&nbsp;</span>
                          What Inspires me
                        </Link>
                      </li>
                      <li className="sidebar__listItem sidebar__listItem--noDecoration">
                        <Link to="/jobs">
                          <span className="sidebar__icon sidebar__icon--jobs">&nbsp;</span>
                          Pet Projects
                        </Link>
                      </li>
                      <li className="sidebar__listItem sidebar__listItem--noDecoration">
                        <Link to="/read">
                          <span className="sidebar__icon sidebar__icon--blog">&nbsp;</span>
                          Stories i like to tell
                        </Link>
                      </li>
                      <li className="sidebar__listItem sidebar__listItem--noDecoration">
                        <Link to="/contact">
                          <span className="sidebar__icon sidebar__icon--contact">&nbsp;</span>
                          Find me
                        </Link>
                      </li>
                    </ul>
                </nav>
            </aside>
        )
    }
}

export default Sidebar;
