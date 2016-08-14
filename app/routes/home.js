import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
              <div className="home__header">
                hello!!! my name is <span className="home__header--highlight">Pablo Gomez Guerrero</span>
                <p>
                  father, sportman, reader, traveller, thinker and Generalist Developer,
                  now at <a target="_blank" href="http://sentisis.com">Sentisis</a>.
                  <br/>
                </p>
              </div>

              <div className="home__skills">
                <div className="row col-xs-12 home__item">
                  <div className="col-xs-6 center-xs home__item--creativity">
                    <h3>creativity</h3>
                    <p className="home__item--description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In eget est in dolor dignissim tincidunt. Maecenas vitae nibh
                        hendrerit, semper magna vel,
                      {/*change happens so quickly, find the inspiration to do valuable things.*/}
                    </p>
                  </div>

                  <div className="col-xs-6 center-xs home__item--challenge">
                    <h3>challenge</h3>
                    <p className="home__item--description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In eget est in dolor dignissim tincidunt. Maecenas vitae nibh
                        hendrerit, semper magna vel,
                      {/*repeated jobs are boring, use challenges to learn something new*/}
                    </p>
                  </div>
                </div>

                <div className="row col-xs-12 home__item">
                  <div className="col-xs-6 center-xs home__item--teamwork">
                    <h3>teamwork</h3>
                    <p className="home__item--description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In eget est in dolor dignissim tincidunt. Maecenas vitae nibh
                        hendrerit, semper magna vel,
                      {/*working with people that complements you makes you better.*/}
                    </p>
                  </div>

                  <div className="col-xs-6 center-xs home__item--poc">
                    <h3>p.o.c.</h3>
                    <p className="home__item--description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In eget est in dolor dignissim tincidunt. Maecenas vitae nibh
                        hendrerit, semper magna vel,
                      {/*perfect first tries are unusual, get the feeling with a proof of concept.*/}
                    </p>
                  </div>
                </div>

                <div className="row home__item">
                  <div className="col-xs-6 col-xs-offset-3 center-xs home__item--freedom">
                    <h3>freedom</h3>
                    <p className="home__item--description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In eget est in dolor dignissim tincidunt. Maecenas vitae nibh
                        hendrerit, semper magna vel,
                      {/*loving my family and my free time make me want to be eficient.*/}
                    </p>
                  </div>
                </div>
              </div>
              <p className="home__footer">Do you want to read <a target="_blank" href="https://stackoverflow.com/cv/popigg">more</a>?</p>
            </div>
        )
    }
}

export default Home;
