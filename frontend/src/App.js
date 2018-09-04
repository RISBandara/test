import React from 'react';
import './App.css';
import Companynav from "./common/navigation/companynav";
import {Footer} from "./common/footer/footer";
import {Header} from "./common/header/header";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Allocatesup from './Company/allocatesup';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <div className="row sidebar">
                        <div className="col-md-2 side-nav">
                            <Companynav/>
                        </div>
                        <div className="col-md-10 ">
                            <div className="row">
                                <div className="col-md-12 top-nav">
                                  <Route  path="/Allocation" component={Allocatesup} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
                </Router>
          
        );
    }
}

export default App;