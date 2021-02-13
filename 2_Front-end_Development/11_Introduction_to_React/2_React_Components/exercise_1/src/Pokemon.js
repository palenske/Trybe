import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { id, name, type, averageWeight, image } = this.props.pokemon;

    return (
      <section className="pokemon">
        <img src={image} alt={`${name} sprite`} />
        <div>
          <p className='pokeName'> {`${name} #${id}`}</p>
          <p className={type}>{type}</p>
          <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
