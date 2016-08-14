import React from 'react';
import { Link, IndexLink } from 'react-router';
import TweenMax from 'gsap';
import circle from '../../public/images/grunge-circle-3.svg';

class Sidebar extends React.Component {

  twistThrobber() {
    let throbber = document.getElementById('throbber');    
    if (throbber) {
      TweenMax.to(throbber,2, {rotation:"-=10_cw"});
    }
  }

  render() {
      return (
        <aside className="sidebar col-xs-3 center-xs">
          <nav className="col-xs-10">
            <ul>
              <li className="sidebar__listItem sidebar__listItem--noDecoration">
                <IndexLink to="/" className="sidebar__link"
                  onClick={this.twistThrobber()}
                  activeClassName="sidebar__link--active"
                  to="/">
                  Inception
                </IndexLink>
              </li>
              <li className="sidebar__listItem sidebar__listItem--noDecoration">
                <Link className="sidebar__link"
                  onClick={this.twistThrobber()}
                  activeClassName="sidebar__link--active" to="/about">
                  About
                </Link>
              </li>
              <li className="sidebar__listItem sidebar__listItem--noDecoration">
                <Link className="sidebar__link"
                  activeClassName="sidebar__link--active" to="/inspire">
                  Inspiration
                </Link>
              </li>
              <li className="sidebar__listItem sidebar__listItem--noDecoration">
                <Link className="sidebar__link"
                  activeClassName="sidebar__link--active" to="/jobs">
                  Pet Projects
                </Link>
              </li>
              <li className="sidebar__listItem sidebar__listItem--noDecoration">
                <Link className="sidebar__link"
                  activeClassName="sidebar__link--active" to="/read">
                  Stories
                </Link>
              </li>
              <li className="sidebar__listItem sidebar__listItem--noDecoration">
                <Link className="sidebar__link"
                  activeClassName="sidebar__link--active" to="/contact">
                  Find me
                </Link>
              </li>
            </ul>
          </nav>
          <img id="throbber" src={circle} className="sidebar__elem--decoration"/>
        </aside>
      )
  }
}

export default Sidebar;
