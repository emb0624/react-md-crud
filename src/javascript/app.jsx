'use strict';
import React from 'react';
import {run,Route,HashLocation,DefaultRoute} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './components/Main.jsx';
import EmployeeList from './components/EmployeeList.jsx';

 //Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

var routes = (
  <Route handler={Main}>
    <DefaultRoute handler={EmployeeList}/>
    <Route handler={EmployeeList} name="employees" />
  </Route>
);

run(routes, HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});