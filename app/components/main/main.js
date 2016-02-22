import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-transition-group'

import Sidebar from './components/sidebar/sidebar'
import About from '../../routes/about/about'


class Main extends React.Component {
    render() {
        const { pathname } = this.props.location

        return (
            <div className="wrapper">
                <Sidebar/>

                <div id="page-content-wrapper">
                    <div className="page-content">
                        <div className="container">
                            <div className="row">
                                <ReactCSSTransitionGroup component="main" id="wrap">
                                    {React.cloneElement(this.props.children || <About />, { key: pathname })}
                                </ReactCSSTransitionGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
