import React from 'react';
import TweenMax from 'gsap';

import arrow from '../../public/images/hand_drawn_arrow_9.svg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollDown = this.scrollDown.bind(this);
  }

  scrollDown() {

    function getScrollX() {
    	return (window.pageXOffset != null) ? window.pageXOffset : (document.documentElement.scrollLeft != null) ? document.documentElement.scrollLeft : document.body.scrollLeft;
    }
    //returns the current vertical scroll position
    function getScrollY() {
    	return (window.pageYOffset != null) ? window.pageYOffset : (document.documentElement.scrollTop != null) ? document.documentElement.scrollTop : document.body.scrollTop;
    }

    var curScroll = {x:getScrollX(), y:getScrollY()};

    TweenMax.to(curScroll, 2, {y:document.body.scrollHeight, autoKill: true, ease:Power1.easeInOut, onUpdate:function() { window.scrollTo(curScroll.x, curScroll.y); }});
  }

  render() {
    return (
      <div>
        <div className="home__header">
          <p>
            Hello!!! my name is <br />
          <span className="home__header--orange">Pablo Gomez Guerrero</span>, <br />
            Thinker and generalist developer, now at <a target="_blank" href="http://sentisis.com">Sentisis</a>.
          </p>
        </div>

        <div className="home__linker">
          <a onClick={this.scrollDown}>
            <span className="row center-xs">Code</span>
            <img src={arrow} className="home__linker--arrow"/>
          </a>
        </div>
        <div className="home__skills">
          <div className="row col-xs-12 home__item">
            <div className="col-xs-6 col-xs-offset-3 home__item--creativity">
              <h3>creativity</h3>
              <p className="home__item--description">
                Finding the inspiration to solve problems with imagination and genious.
               </p>
            </div>
          </div>

          <div className="row col-xs-12 home__item">
            <div className="col-xs-6 home__item--challenge">
              <h3>challenge</h3>
              <p className="home__item--description">
                 Using challenges to learn something new,
                 good opportunities will always come.
              </p>
            </div>

            <div className="col-xs-6 home__item--teamwork">
              <h3>teamwork</h3>
              <p className="home__item--description">
                Working with people makes me better.
                Everybody got its own "magic" to share.
              </p>
            </div>
          </div>

          <div className="row col-xs-12 home__item">
            <div className="col-xs-6 home__item--poc">
              <h3>p.o.c.</h3>
              <p className="home__item--description">
                Perfect first tries are unusual for me,
                learning by doing, getting the feeling.
              </p>
            </div>

            <div className="col-xs-6 home__item--freedom">
              <h3>freedom</h3>
              <p className="home__item--description">
                Loving my free time and to be with my family.
                Balance life. Working when feeling inspired.
              </p>
            </div>
          </div>
        </div>
        <p className="home__footer">Do you want to read <a href="/about">more</a>?</p>
      </div>
    )
  }
}

export default Home;
