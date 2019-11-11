import React from 'react';
import Diagram from './diagram';
import DiagramToolbar from './diagramToolbar';
import './diagramCard.sass';

const DiagramCard = ({ chordDat }) => (
  <div className='diagram-card'>
    <Diagram vex={chordDat.vex} />
    <DiagramToolbar midi={chordDat.midi} />
  </div>
);

export default DiagramCard;
