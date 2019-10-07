import React from "react";
import Diagram from "./diagram";
import "../../style/components/chord/card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.shadowClasses = ["shadow", "shadow-lg"];
    this.state = {
      shadowClass: this.shadowClasses[0]
    };
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
        <div className="card-header">
          <h5 className="card-title text-center">{this.props.name}</h5>
        </div>
        <div className="card-body">
          <Diagram chord={this.props.chord} position={this.props.position} />
        </div>
        <div className="card-footer">
          <h5 className="text-center">Variant {this.props.variant}</h5>
        </div>
      </div>
    );
  }
}

export default Card;
