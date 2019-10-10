import React from 'react';
import '../../style/components/chord/dots.css';

const Dots = ({ id, total }) => {
  let dots = [];
  for (let i = 0; i < total; i++) {
    let cssClass = 'dot';
    if (i === id) {
      cssClass += ' bg-gradient-primary selected';
    }
    dots.push(<div className={cssClass} key={i} />);
  }
  return <div className="dots">{dots}</div>;
};

export default Dots;
