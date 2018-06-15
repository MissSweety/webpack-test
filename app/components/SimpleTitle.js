import React from 'react';

const SimpleTitle = props =>
  <div>
    <h2>{props.title}</h2>
    <p>{props.msg}</p>
  </div>;

export default SimpleTitle;