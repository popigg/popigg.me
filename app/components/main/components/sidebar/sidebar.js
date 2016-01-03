import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {
    render() {
        return (
            <aside>
                <nav>
                    <ul>
                        <li><Link to="/about.me">about.me</Link></li>
                        <li><Link to="/resu.me">resu.me</Link></li>
                        <li><Link to="/project.me">project.me</Link></li>
                        <li><Link to="/inspire.me">inspire.me</Link></li>
                        <li><Link to="/find.me">find.me</Link></li>
                    </ul>
                </nav>
            </aside>
        )
    }
}

export default Sidebar;
