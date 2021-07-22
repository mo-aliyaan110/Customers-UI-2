import React from 'react';
import { BrowserRouter,  Route } from  'react-router-dom';
import HomeComp from '../HomeComp';
import Superstar from '../Superstar';
import Batista from '../Batista';
import Baron from '../Baron';
import Tripleh from '../Tripleh';
import Shane from '../Shane';
import Batista2 from '../Batista2';




function Routing() {
    return (
        <div>
            <BrowserRouter>
                
                <Route exact path='/' component={HomeComp}/>
                <Route exact path='/superstar'  component={Superstar}/>
                <Route exact path='/batista'  component={Batista}/>
                <Route exact path='/baron'  component={Baron}/>
                <Route exact path='/tripleh'  component={Tripleh}/>
                <Route exact path='/shane'  component={Shane}/>
                <Route exact path='/batista2'  component={Batista2}/>
            </BrowserRouter>
        </div>
    )
}

export default Routing
