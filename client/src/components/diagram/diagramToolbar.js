import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { playChord } from '../../utils/playback';
import './diagramToolbar.sass';

const DiagramToolbar = ({ midi }) => {
  return (
    <div className='diagram-toolbar'>
      <Button
        icon
        className='play-button'
        onClick={() => playChord(midi, 'acoustic guitar', 1, 0.25)}
      >
        <Icon name='play' />
      </Button>
    </div>
  );
};

export default DiagramToolbar;
