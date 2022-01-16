import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './tareas/PrimeraApp';
import './index.css';
// import CounterApp from './tareas/CounterApp';



const divRoot = document.querySelector("#root");

// ReactDOM.render( <PrimeraApp />, divRoot );
ReactDOM.render( <CounterApp value={ 10 }/>, divRoot );
// ReactDOM.render( <PrimeraApp saludo="Hola soy Goku"/>, divRoot );