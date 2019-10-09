import React from 'react';
import Diagram from './diagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import '../../style/components/chord/card.css';

class Card extends React.Component {
  render() {
    return (
      <div className={'card diagram-card m-4'}>
        <div className="card-body chord-card-body">
          <div className="diagram-cycle">
            <button
              type="button"
              className="btn btn-outline-primary diagram-button"
            >
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </button>
            <Diagram frets={this.props.frets} position={this.props.position} />
            <button
              type="button"
              className="btn btn-outline-primary diagram-button"
            >
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </button>
          </div>
        </div>
        <div className="card chord-name-card bg-primary text-white">
          <h5 className="chord-name">{this.props.name}</h5>
        </div>
      </div>
    );
  }
}

export default Card;
