import React from 'react';
import './button.scss';

const Button = ({ color = 'default', children }) => (
  <button className={`btn btn-${color}`}>{children}</button>
);

export default Button;
