import React from 'react';
import imgSrc from '../../public/images/pencil.jpg';
import PageTitle from '../components/PageTitle';

class About extends React.Component {
    render() {
        return (
            <div>
                <img src="http://random.bunny-comic.com/strips/150709.gif" className="center-xs" />
                <PageTitle title="about" overlineColor='orange'/>
                <div className="about__content start-xs">

                  <p>
                    I like technology very much, and i have freely decided to dedicate
                    my life to it. Sometimes is not easy, you are avocated to change or
                    mutate your skills, work on your free time, understand complexity
                    you cannot put in your mind in a language is not you mother tongue.
                    Last 10 years i found my self very motivated and try to build something
                    to feel proud of.
                    I want to build things that change and improve in some way the world we live.
                    It makes me feel very positive, happy and glad that technology allows me to try.
                  </p>
                  <p>
                    After sharing experiences with many people,
                    in different european cities and countries:
                    Dublin, Birmingham, London, Berlin and finally Madrid, my home.
                    I have been very lucky to find a good bunch of people
                    that tought and inspire me with many values and skils: focus and flow time,
                    teamwork, fellowship, eficiency, patience, different mindsets, diversity ...
                  </p>
                  <p>
                    I would love to communicate and inspire others at least a little bit of
                    what i took from others.
                    Nevertheless i keep on learning and taking inspiration and skills
                    to share.
                    It can be coding, managing projects, writing documentation, being reviewed and
                    reviewing others code, building a team, thinking about technical
                    solution for a problem.
                    That is my way of contributing.
                  </p>
                  <p>
                    In the past i have played with web, mobile and cloud architechtures.
                    In a variety of languages but more focus on javascript and PHP.
                    Now i am currently more focus in learning new concepts and
                    how things work inside ( browsers, event loop, mobile client,
                    cloud, app and webapp life cycle, leadership ).
                    In the future i would like to develop my skills to a level
                    of solving many more kind of known problems and why not
                    building a top performance team where a play a major role.
                  </p>
                </div>
            </div>
        )
    }
}

export default About;
