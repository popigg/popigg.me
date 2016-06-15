import React from 'react';
import { Link } from 'react-router';
import circle from '../../public/images/grunge-circle-3.svg';

class Sidebar extends React.Component {
    render() {
        return (
            <aside className="sidebar col-xs-offset-1 col-xs-3 center-xs">
                <nav className="col-xs-10">
                    <ul>
                      <li className="sidebar__listItem sidebar__listItem--noDecoration">
                        <Link to="/">
                          Inception
                        </Link>
                      </li>
                      <li className="sidebar__listItem sidebar__listItem--noDecoration">
                        <Link to="/inspire">
                          Inspiration
                        </Link>
                      </li>
                      <li className="sidebar__listItem sidebar__listItem--noDecoration">
                        <Link to="/jobs">
                          Pet Projects
                        </Link>
                      </li>
                      <li className="sidebar__listItem sidebar__listItem--noDecoration">
                        <Link to="/read">
                          Stories
                        </Link>
                      </li>
                      <li className="sidebar__listItem sidebar__listItem--noDecoration">
                        <Link to="/contact">
                          Find me
                        </Link>
                      </li>
                    </ul>
                </nav>
                <img src={circle} className="sidebar__elem--decoration"/>
            </aside>
        )
    }
}

export default Sidebar;
