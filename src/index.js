import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import reportWebVitals from './reportWebVitals';

//Componets are labelled with an initial capital letter
//CARE: syntaxis
const Item = (props) => {
  return(
    <div>
      <p>This is an Item Component. It's name is {props.name}.</p>
      <Foo name={'Kirlia'}/>
      <Foo name={'Gardevoir'}/>
      <Foo name={'Gallade'}/>
      {item}
    </div>
  )
}
//Components declaration alternative version
const Foo = ({ name }) => {
  return(
    <p>This is a Foo Component. It's name is {name}.</p>
  )
}

const item = <p>This is a new item. Elements are composable.</p>
const element = <div>
    <h1>This is an Element!</h1>
    <p> And this is a test :)</p>
    <Item name={'Ralts'}/>
  </div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />,
    //element, //uncomment this line to see all changes
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
