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
            <Diagram chord={this.props.chord} position={this.props.position} />
            <button
              type="button"
              className="btn btn-outline-primary diagram-button"
            >
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </button>
          </div>
        </div>
        <div className="card-footer chord-footer shadow bg-primary text-white shadow-sm">
          <h5 className="chord-name">{this.props.name}</h5>
        </div>
      </div>
    );
  }
}

export default Card;
