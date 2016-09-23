import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
              <div className="home__header center-xs">
                <p>
                  Hello!!! my name is <br />
                <span className="home__header--orange">Pablo Gomez Guerrero</span>, <br />
                  Thinker and generalist developer, now at <a target="_blank" href="http://sentisis.com">Sentisis</a>.
                </p>
              </div>

              <div className="home__skills">
                <div className="row col-xs-12 home__item">
                  <div className="col-xs-6 col-xs-offset-3 home__item--creativity">
                    <h3>creativity</h3>
                    <p className="start-xs home__item--description">
                      Find the inspiration to solve problems with imagination.
                     </p>
                  </div>
                </div>

                <div className="row col-xs-12 home__item">
                  <div className="col-xs-6 home__item--challenge">
                    <h3>challenge</h3>
                    <p className="start-xs home__item--description">
                       Using challenges to learn something new, opportunities will always come.
                    </p>
                  </div>

                  <div className="col-xs-6 home__item--teamwork">
                    <h3>teamwork</h3>
                    <p className="start-xs home__item--description">
                      Working with people makes me better.
                      Everybody got its own "magic" to teach.
                    </p>
                  </div>
                </div>

                <div className="row col-xs-12 home__item">
                  <div className="col-xs-6 home__item--poc">
                    <h3>p.o.c.</h3>
                    <p className="start-xs home__item--description">
                      Perfect first tries are unusual for me, so i like touching things first.
                    </p>
                  </div>

                  <div className="col-xs-6 home__item--freedom">
                    <h3>freedom</h3>
                    <p className="start-xs home__item--description">
                      I love my free time and spend time with family.
                      Why not work less hours producing the same or more?
                    </p>
                  </div>
                </div>
              </div>
              <p className="home__footer center-xs">Do you want to read <a href="/about">more</a>?</p>
            </div>
        )
    }
}

export default Home;
