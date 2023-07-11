import React, { useContext } from 'react';
import Button from './Button';
import ThemeContext from '../context/ThemeContext';
import Profile from './Profile';

function Container() {
    const {theme}= useContext(ThemeContext);
    console.log(theme);
  return (
    <div className={`app ${theme==="dark" ? theme:""}`}>
      <Button/>
      <hr/>
      <Profile/>
    </div>
  )
}

export default Container;
