import React from 'react';
import { darkTheme, lightTheme } from './Theme';
import { IoIosSunny, IoIosMoon } from 'react-icons/io'; // You can use icons of your choice

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.5rem',
        color: 'white',
        margin: '0 10px',
      }}
    >
      {darkMode ? <IoIosSunny /> : <IoIosMoon/>}
    </button>
  );
};

export default ThemeToggle;
