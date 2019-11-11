import React, { useState } from 'react';
import { Menu, Dropdown, Icon, Button } from 'antd';
import { connect } from 'react-redux';

const instruments = ['Guitar', 'Ukulele'];

const InstrumentSelect = ({ setInstrument }) => {
  const [current, setCurrent] = useState('Guitar');

  const onClick = ({ key }) => {
    const instrument = instruments[key];
    if (instrument !== current) {
      setCurrent(instrument);
      setInstrument(instrument.toLowerCase());
    }
  };

  const menu = (
    <Menu onClick={onClick}>
      {instruments.map((instrument, i) => (
        <Menu.Item key={i}>{instrument}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a href={null} className='ant-dropdown-link'>
        <Button>
          {current}
          <Icon type='down' />
        </Button>
      </a>
    </Dropdown>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setInstrument: instrument => {
      dispatch({
        type: 'SET_INSTRUMENT',
        instrument
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(InstrumentSelect);
