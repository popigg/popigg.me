import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Sidebar from './sidebar'
import About from '../routes/about'


class Main extends React.Component {
    render() {
      const { pathname } = this.props.location
      return (
        <div className="row center-xs">
          <div className="col-xs-9">
              {<ReactCSSTransitionGroup
                transitionName="main__views--transition"
                transitionAppear={true}
                transitionEnterTimeout={300}
                transitionAppearTimeout={300}
                transitionLeaveTimeout={100}
                component="div">
                  {React.cloneElement(this.props.children, { key: pathname })}
              </ReactCSSTransitionGroup>}
          </div>

          <Sidebar/>
        </div>
      )
    }
}

export default Main
