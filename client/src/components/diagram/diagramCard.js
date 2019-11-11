import React from 'react';
import Diagram from './diagram';
import DiagramToolbar from './diagramToolbar';
import './diagramCard.sass';

const DiagramCard = ({ chordDat }) => (
  <div className='diagram-card'>
    <Diagram vex={chordDat.vex} />
    <DiagramToolbar />
  </div>
);

export default DiagramCard;
