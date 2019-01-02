import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import additional components
import SingleShow from '../components/SingleShow/SingleShow'
import SearchBar from '../containers/SearchBar/SearchBar'

const Router = props => (
    <div>
    <Switch>
         <Route exact path="/" component={SearchBar}/>    
         <Route path="/series/:id" component={SingleShow} />    
    </Switch>
    <div></div>
    </div>
);

export default Router;
