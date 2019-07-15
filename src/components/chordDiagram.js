import React from 'react';
import { draw } from 'vexchords';
import './style.css';

class ChordDiagram extends React.Component {
  constructor(props) {
    super(props);
    this.shadowClasses = ['shadow', 'shadow-lg'];
    this.state = {
      shadowClass: this.shadowClasses[0]
    };
  }

  componentDidMount() {
    draw(this.refs.diagram, this.props.chord, {
      width: 200,
      height: 240,
      defaultColor: 'black'
    });
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
        className={`card diagram-card m-4 ${this.state.shadowClass}`}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onLeave}
      >
        <div className='card-body'>
          <h4 className='text-center'>{this.props.chord.name}</h4>
          <div ref='diagram' className='diagram' />
        </div>
      </div>
    );
  }
}

export default ChordDiagram;
