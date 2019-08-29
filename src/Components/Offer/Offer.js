import React from 'react';
import './Offer.css';
import Box from './Box/Box';

class Offer extends React.Component {
	constructor(props){
    super(props);
    
    this.offers = [
      {
        offer: 'Usługa 1',
        isNewOffer: true
      },
      {
        offer: 'Usługa 2',
        isNewOffer: false
      },
      {
        offer: 'Usługa 3',
        isNewOffer: false
      },
      {
        offer: 'Usługa 4',
        isNewOffer: false
      },
      {
        offer: 'Usługa 5',
        isNewOffer: false
      },
      {
        offer: 'Usługa 6',
        isNewOffer: true
      },
    ]
	}

	render() {
	return (
    <section id="offer">
    <div className="container offer-container">
      <div className="offer-header">
        <h1>Czym zajmuje się nasza firma?</h1>
      </div>
      <div className="box-container">
        {this.offers.map((offer, i) => {
          return <Box box={offer} key={i}></Box>
        })}
      </div>
    </div>
</section>
	)}
};

export default Offer;