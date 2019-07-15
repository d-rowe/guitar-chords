import React from 'react';
import { draw } from 'vexchords';
import './style.css';

class ChordDiagram extends React.Component {
  constructor(props) {
    super(props);
    this.shadowClasses = ['shadow', 'shadow-lg'];
    this.state = { shadowClass: this.shadowClasses[0] };
  }

  componentDidMount() {
    draw(
      this.refs.diagram,
      {
        chord: [[1, 2], [2, 1], [3, 2], [4, 0], [5, 'x'], [6, 'x']]
      },
      { width: 200, height: 240, defaultColor: '#745' }
    );
  }

  onHover = () => {
    this.setState({ shadowClass: this.shadowClasses[1] });
  };

  onLeave = () => {
    this.setState({ shadowClass: this.shadowClasses[0] });
  };

  render() {
    return (
      <div
        className={`card diagram-card m-3 ${this.state.shadowClass}`}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onLeave}
      >
        <div className='card-body'>
          <div ref='diagram' className='diagram' />
        </div>
      </div>
    );
  }
}

export default ChordDiagram;
