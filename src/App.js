import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from "react";
import Home from './pages/home';
import Carimobil from './pages/carimobil';
import Pencarian from './pages/pencarian';
import Detail from './pages/detail';

function App() {
    return(
        <Router>
            <Switch>
                <Route exact path='/detail-mobil/:carId' component={Detail} />
                <Route exact path='/cari-mobil' component={Carimobil} />
                <Route exact path='/pencarian' component={Pencarian} />
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    )
}

export default App;