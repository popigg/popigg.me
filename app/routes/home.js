import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
              <div className="home__header">
                hello!!! my name is <span className="home__header--highlight">Pablo Gomez Guerrero</span>
              </div>
              <p>
                father, sportman, reader, traveller, thinker and Generalist Developer,
                now at <a target="_blank" href="http://sentisis.com">Sentisis</a>.
                <br/>
              </p>

              <div className="row col-xs-12 home__item">
                <div className="col-xs-6 center-xs home__item--creativity">
                  <h3>creativity</h3>
                  <p className="home__item--description">
                    change happens so quickly, find the inspiration to do valuable things.
                  </p>
                </div>

                <div className="col-xs-6 center-xs home__item--challenge">
                  <h3>challenge</h3>
                  <p className="home__item--description">
                    repeated jobs are boring, use challenges to learn something new
                  </p>
                </div>
              </div>

              <div className="row col-xs-12 home__item">
                <div className="col-xs-6 center-xs home__item--teamwork">
                  <h3>teamwork</h3>
                  <p className="home__item--description">
                    working with people that complements you makes you better.
                  </p>
                </div>

                <div className="col-xs-6 center-xs home__item--poc">
                  <h3>p.o.c.</h3>
                  <p className="home__item--description">
                    perfect first tries are unusual, get the feeling with a proof of concept.
                  </p>
                </div>
              </div>

              <div className="row home__item">
                <div className="col-xs-12 center-xs home__item--freedom">
                  <h3>freedom</h3>
                  <p className="home__item--description">
                    loving my family and my free time make me want to be eficient.
                  </p>
                </div>
              </div>
              <p>Do you want to read <a target="_blank" href="https://stackoverflow.com/cv/popigg">more</a>?</p>
            </div>
        )
    }
}

export default Home;
