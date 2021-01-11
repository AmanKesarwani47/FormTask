import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch, Route, Redirect} from 'react-router-dom';
import ShowForm from './ShowForm';

const App = () => {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/ShowForm" render={()=><ShowForm/>}/>
                <Redirect to="/"/>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;