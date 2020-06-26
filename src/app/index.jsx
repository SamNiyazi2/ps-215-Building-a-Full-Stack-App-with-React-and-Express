// 06/20/2020 04:49 am - SSN - [20200620-0415] - [001] - M03 - Configuring the development environment with Webpack and Babel

import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components/Main';

// ReactDOM.render(

//     <link
//         href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
//         rel="stylesheet"
//         integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
//         crossorigin="anonymous"/>

//         ,

//     document.getElementById ( 'cssLink')

// );

ReactDOM.render(
  <Main />,

  document.getElementById('app')
);
