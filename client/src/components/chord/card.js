import React from 'react';
import Diagram from './diagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import Dots from './dots';
import '../../style/components/chord/card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      variant: 0
    };
  }

  changeVariant = direction => {
    const prevVariant = this.state.variant;
    let variant;
    let variantNum = this.props.chord.length;
    if (direction === -1 && prevVariant === 0) {
      variant = variantNum - 1;
    } else {
      variant = (prevVariant + direction) % variantNum;
    }

    this.setState({ variant: variant });
  };

  arrowButton = direction => {
    let icon, change;
    if (direction === 'left') {
      icon = faChevronLeft;
      change = -1;
    } else {
      icon = faChevronRight;
      change = 1;
    }

    return (
      <button
        type="button"
        className="btn btn-outline-primary diagram-button btn-sm"
        onClick={() => this.changeVariant(change)}
      >
        <FontAwesomeIcon icon={icon} size="1x" />
      </button>
    );
  };

  render() {
    return (
      <div className={'card diagram-card m-4'}>
        <div className="card-body chord-card-body">
          <div className="diagram-cycle">
            {this.arrowButton('left')}
            <Diagram
              frets={this.props.chord[this.state.variant].frets}
              baseFret={this.props.chord[this.state.variant].baseFret}
              barres={this.props.chord[this.state.variant].barres}
            />
            {this.arrowButton('right')}
          </div>
        </div>
        <Dots id={this.state.variant} total={this.props.chord.length} />
        <div className="card chord-name-card bg-primary text-white">
          <h5 className="chord-name">{this.props.name}</h5>
        </div>
      </div>
    );
  }
}

export default Card;
