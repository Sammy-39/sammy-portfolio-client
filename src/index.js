import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App';

AOS.init({
  "duration":"700",
  "anchor-placement":"top-bottom",
  "easing":"ease-in-cubic"
});
AOS.refresh();
AOS.refreshHard();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


