import React from 'react';
import ReactDom from 'react-dom';

const Fname = 'Manish';
const Lname = 'Sharma';

ReactDom.render(
  <>My name is {`${Fname} ${Lname}`} and my lucky Number is {12 % 5}</>,
  document.getElementById('root')
);
