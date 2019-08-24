import React from 'react';

const Variants = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='d-flex flex-column text-center'>
        <div className='btn-group mr-2' role='group' aria-label='First group'>
          <button type='button' className='btn btn-dark'>
            1
          </button>
          <button type='button' className='btn btn-secondary'>
            2
          </button>
          <button type='button' className='btn btn-secondary'>
            3
          </button>
          <button type='button' className='btn btn-secondary'>
            4
          </button>
        </div>
      </div>
    </div>
  );
};

export default Variants;
