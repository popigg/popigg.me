import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
              <p>Hi, my name is <span className="">Pablo Gomez</span>.
                <br/>
                Thanks for visiting me. 
                Find me CV <a href="https://stackoverflow.com/cv/popigg">here</a>.
                <br/>
                how i see the world around us?
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
              </ul>
            </div>
        )
    }
}

export default About;
