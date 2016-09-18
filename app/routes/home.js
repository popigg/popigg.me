import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
              <div className="home__header start-xs">
                <p>
                  Hello!!! my name is <span className="home__header--highlight">Pablo Gomez Guerrero</span>,
                  thinker and generalist developer,
                  now at <a target="_blank" href="http://sentisis.com">Sentisis</a>.
                </p>
              </div>

              <div className="home__skills">
                <div className="row col-xs-12 home__item">
                  <div className="col-xs-6 center-xs home__item--creativity">
                    <h3>creativity</h3>
                    <p className="home__item--description">
                      Find the inspiration to solve problems with imagination.
                     </p>
                  </div>

                  <div className="col-xs-6 center-xs home__item--challenge">
                    <h3>challenge</h3>
                    <p className="home__item--description">
                       Using challenges to learn something new, opportunities will always come.
                    </p>
                  </div>
                </div>

                <div className="row col-xs-12 home__item">
                  <div className="col-xs-6 center-xs home__item--teamwork">
                    <h3>teamwork</h3>
                    <p className="home__item--description">
                      Working with people makes me better.
                      Everybody got its own "magic" to teach.
                    </p>
                  </div>

                  <div className="col-xs-6 center-xs home__item--poc">
                    <h3>p.o.c.</h3>
                    <p className="home__item--description">
                      Perfect first tries are unusual for me, so i like touching things first.
                    </p>
                  </div>
                </div>

                <div className="row home__item">
                  <div className="col-xs-6 col-xs-offset-3 center-xs home__item--freedom">
                    <h3>freedom</h3>
                    <p className="home__item--description">
                      I love my free time and spend time with family.
                      Why not work less hours producing the same or more?
                    </p>
                  </div>
                </div>
              </div>
              <p className="home__footer start-xs">Do you want to read <a target="_blank" href="https://stackoverflow.com/cv/popigg">more</a>?</p>
            </div>
        )
    }
}

export default Home;
