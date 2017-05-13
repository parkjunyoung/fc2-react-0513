import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from '../routes/Home';
import Posts from '../routes/Posts';
import Menu from './Menu';
import Mypage from './Mypage';
import NotExist from './NotExist';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/posts" component={Posts} />
                        <Route path="/mypage" component={Mypage} />
                        <Route component={NotExist} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;