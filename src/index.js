import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FortuneCookieModel from './models/FortuneCookieStore'
// creat new instance pass in the intial state of models data 
const fortuneCookie = FortuneCookieModel.create({
  mealPrice:"USD",
  userName: "Ian",
  numFortune: "",
  pullNewFortune: false

})

ReactDOM.render(
  <React.StrictMode>
    <App fortuneCookie={fortuneCookie}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
