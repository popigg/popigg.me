import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
              <p>Hi!!! thanks for visiting, my name is <span className="">Pablo Gomez</span>.
                <br/>
                I am father, sportman, reader, traveller, thinker and Generalist Developer,
                now at <a target="_blank" href="http://sentisis.com">Sentisis</a>
                <br/>
                <span className="">
                  Read more <a target="_blank" href="https://stackoverflow.com/cv/popigg">here</a>.
                </span>
                <br/>
              </p>
              
              <ul>
                <li>
                  <span className="about__listItem--big">cretivity</span>
                  <p>change happens so quickly, i try to find the inspiration to do valuable things.</p>
                </li>
                <li>
                  <span className="about__listItem--big">challenge</span>
                  <p>repeated jobs are boring, and challenges to learn something new is where i amuse.</p>
                </li>
                <li>
                  <span className="about__listItem--big">teamwork</span>
                  <p>working with people that complements you makes you better, so i need people around me.</p>
                </li>
                <li>
                  <span className="about__listItem--big">proof of concept</span>
                  <p>perfect first tries are unusual, failing and improving is more what use to happen to me.</p>
                </li>
                <li>
                  <span className="about__listItem--big">shipping</span>
                  <p>building things is because there is a relation between builder and consumer. I believe in early feedback.</p>
                </li>
                <li>
                  <span className="about__listItem--big">freedom</span>
                  <p>loving my family and my free time make me want to be eficient i want to   go home early</p>
                </li>
              </ul>
            </div>
        )
    }
}

export default About;
