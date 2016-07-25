import React from 'react';
import imgSrc from '../../public/images/pencil.jpg';

class About extends React.Component {
    render() {
        return (
            <div>
                <img src={imgSrc} className="row col-xs-12 about__image--header" />
                <h1 className="about__header">about</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget est in dolor dignissim tincidunt. Maecenas vitae nibh hendrerit, semper magna vel, blandit sem. Morbi ultricies ac est ac vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a risus vel felis commodo pulvinar.</p>
            </div>
        )
    }
}

export default About;
