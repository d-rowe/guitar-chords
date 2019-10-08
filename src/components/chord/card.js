import React from 'react';
import Diagram from './diagram';
import '../../style/components/chord/card.css';

class Card extends React.Component {
  render() {
    return (
      <div className={'card diagram-card m-4'}>
        <div className="card-body">
          <Diagram chord={this.props.chord} position={this.props.position} />
        </div>
        <div className="card-footer chord-footer shadow bg-primary text-white">
          <h5 className="chord-name">{this.props.name}</h5>
        </div>
      </div>
    );
  }
}

export default Card;
