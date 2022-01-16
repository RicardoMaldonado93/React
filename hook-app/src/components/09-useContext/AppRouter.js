import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <div className="container">
                    <Switch>
                        /**
                            Si ponemos la ruta mas generica '\', Router toma por defecto la que se este visualizando 
                            ya que por expresion regular coincide con cualquiera de las rutas, por recomendacion la ruta 
                            generica siempre debe ir al final, o agregar la props 'exact' para que este busque exactamente
                            la ruta seteada en el browser.
                        */

                        <Route exact path="/" component={ HomeScreen } />
                        <Route exact path="/about" component={ AboutScreen } />
                        <Route exact path="/login" component={ LoginScreen } />
                        
                        /** Default Router */
                        <Redirect to="/" />

                    </Switch>
                </div>
                
            </div>
        </Router>
    )
}
