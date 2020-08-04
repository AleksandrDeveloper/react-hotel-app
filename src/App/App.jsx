import React from 'react';
import './App.css';
import Home from '../page/Home';
import Rooms from '../page/Rooms';
import SingleRooms from '../page/SingleRooms';
import Error from '../page/Error';
import  NavBar from '../components/NavBar'
import { Switch,Route, } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/rooms" exact>
                <Rooms />
            </Route>
            
            <Route path="/rooms/:slug" component={SingleRooms} />
            {/* <Route path='' component={} /> */}
            
            <Route>
                <Error />
            </Route>
      </Switch>

    </div>
  );
}

export default App;
