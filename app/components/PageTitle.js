import React from 'react';

class PageTitle extends React.Component {

  getStyle() {
    return `page__title page__title--${this.props.overlineColor}`;
  }

  render() {

    return (
      <h1 className={this.getStyle()}>{this.props.title}</h1>
    )
  }
}

export default PageTitle;
