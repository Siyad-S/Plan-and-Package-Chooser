import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './MiniSideBar.css';

const MiniSideBar = () => {
  return (
    <div className='bell_icon'>
      <FontAwesomeIcon icon={faBell} />
      <button>
        <i className="material-symbols-outlined">add</i>
      </button>
    </div>
  );
};

export default MiniSideBar;
