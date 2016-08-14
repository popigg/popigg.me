import React from 'react';
import imgSrc from '../../public/images/pencil.jpg';

class About extends React.Component {
    render() {
        return (
            <div>
                <img src={imgSrc} className="row col-xs-12 about__image--header" />
                <h1 className="about__header">about</h1>
                <div className="about__content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque convallis efficitur diam, sit amet laoreet ipsum finibus sed.
                    Aenean fermentum venenatis eleifend. Praesent ac nisl in eros interdum
                    ultrices volutpat eu massa.
                    Nunc tempor diam justo, ut sollicitudin velit rhoncus in.
                    Etiam blandit quam vel sem varius, in vulputate mauris posuere.
                    Integer molestie nisl sed scelerisque gravida. Nam varius lacus est,
                    id scelerisque nibh viverra quis. Sed molestie sapien libero,
                    nec faucibus ligula condimentum sed. Aliquam sagittis rhoncus
                    purus vitae condimentum. Donec eget fringilla justo.
                    Morbi quis quam dapibus, vulputate neque eu, hendrerit arcu.
                    Phasellus sed ligula malesuada, maximus massa vel, ullamcorper orci.
                  </p>
                  <p>
                    Duis facilisis odio eu rhoncus efficitur. In cursus rutrum tortor.
                    Donec risus turpis, facilisis id nisl id, consectetur dictum nisi.
                    Quisque in magna non elit congue pretium vel eu neque.
                    Vivamus vitae est justo. Praesent non commodo enim.
                    Sed porta vulputate ligula, vel euismod nisi accumsan sed.
                  </p>
                  <p>
                    Pellentesque tincidunt neque a mattis tempor. Suspendisse potenti.
                    Sed sollicitudin non nisl ut faucibus. Cras laoreet auctor pulvinar.
                    Maecenas eu leo lacus. Quisque gravida, nulla sed aliquet maximus,
                    lorem elit suscipit dolor, sit amet volutpat ante orci tempor libero.
                    Aenean semper, diam eget lacinia volutpat, leo metus elementum quam,
                    sagittis eleifend elit elit vitae nulla.
                  </p>
                  <p>
                    Aliquam ultrices vestibulum lacinia. Nunc sodales iaculis dolor id gravida.
                    Nulla facilisi. Morbi congue maximus nulla, quis dapibus lectus tempus mollis.
                    In id efficitur enim, eu eleifend nulla. Aliquam ac condimentum turpis.
                    Nulla tristique tempor libero.
                  </p>
                  <p>
                    Etiam vulputate ante sit amet tortor aliquam vehicula.
                    Ut nibh tortor, posuere quis neque non, fringilla tincidunt orci.
                    Vivamus lacus nisl, dignissim sed luctus vel, molestie quis neque.
                    Praesent ultrices in nulla et dapibus. Phasellus facilisis convallis vehicula.
                    Cras et odio vitae eros efficitur hendrerit eget sit amet nunc.
                    Sed at condimentum ex.
                  </p>
                </div>
            </div>
        )
    }
}

export default About;
