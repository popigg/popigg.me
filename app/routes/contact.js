import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h1 className="contact__header">contact</h1>
                <p>
                  <a href="https://github.com/popigg" target="_blank">
                    <span className="contact__social--github">&nbsp;</span>
                    <span>popigg</span>
                  </a>
                </p>
                <p>
                  <a href="https://bitbucket.org/popigg" target="_blank">
                    <span className="contact__social--bitbucket">&nbsp;</span>
                    <span>popigg</span>
                  </a>
                </p>
                <p>
                  <a href="https://twitter.com/popigg" target="_blank">
                    <span className="contact__social--twitter">&nbsp;</span>
                    <span>@popigg</span>
                  </a>
                </p>
                <p>
                  <a href="https://www.linkedin.com/in/pablo-gomez-guerrero-095abb22" target="_blank">
                    <span className="contact__social--linkedin">&nbsp;</span>
                    <span className="contact__social--linkedinDescription">Pablo Gomez Guerrero</span>
                  </a>
                </p>
                <p>
                  <a href="mailto:popigg@gmail.com" target="_top">
                    <span className="contact__social--email">&nbsp;</span>
                    <span>popigg[at]gmail.com</span>
                  </a>
                </p>
            </div>
        )
    }
}

export default Contact;
