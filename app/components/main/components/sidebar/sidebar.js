import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {
    render() {
        return (
            <aside id="sidebar" className="col-xs-4">
                <nav>
                    <ul>
                        <li><Link to="/resu.me">resu.me</Link></li>
                        <li><Link to="/project.me">project.me</Link></li>
                        <li><Link to="/inspire.me">inspire.me</Link></li>
                        <li><Link to="/find.me">find.me</Link></li>
                    </ul>
                </nav>
                &nbsp;
            </aside>
        )
    }
}

export default Sidebar;
