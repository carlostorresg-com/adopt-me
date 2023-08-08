import { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  };

  // handleIndexClick() {
  //   console.log(this); // this is undefined because the function creates a new scope
  // }

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index, // dataset refers to any "data-" attributes in the DOM
      // index is a string -> everything that comes back from the DOM is a string even when it is a number
      // the plus sign is to coerce the number into a string
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    console.log(images);
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? 'active' : ''}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
