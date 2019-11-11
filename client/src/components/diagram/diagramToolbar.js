import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './diagramToolbar.sass';

const DiagramToolbar = () => (
  <div className='diagram-toolbar'>
    <Button icon className='play-button'>
      <Icon name='play' />
    </Button>
  </div>
);

export default DiagramToolbar;
