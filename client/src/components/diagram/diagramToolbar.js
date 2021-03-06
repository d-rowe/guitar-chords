import React from 'react';
import { Button, Icon } from 'antd';
import { playChord } from '../../utils/playback';
import './diagramToolbar.sass';

const DiagramToolbar = ({ midi }) => {
  return (
    <div className='diagram-toolbar'>
      <Button
        shape='circle'
        icon='sound'
        theme='twoTone'
        size='large'
        onClick={() => playChord(midi, 'acoustic guitar', 1, 0.25)}
      />
    </div>
  );
};

export default DiagramToolbar;
