import './App.css';
import {observer } from 'mobx-react'
function App (props){
  const {fortuneCookie} = props
  return (
    <div>
      Hello
    <h1>{fortuneCookie.status()}</h1>
    <button onClick={fortuneCookie.newFortune}> New Fortune </button>
    </div>
  );
}

export default observer(App);


//fortune cookie api http://fortunecookieapi.com/v1/fortunes/id http://fortunecookieapi.com/v1/fortunes?limit=&skip=&page