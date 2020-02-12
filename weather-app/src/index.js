import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './weather.css';

import Menu from './menu'
import Header from './cardHeader'
import TwitterFeed from './cardBLeft'
import WeatherFor from './cardBRight'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Menu/>
        <div className="card">
            <Header/>
            <div className="card_bottom">
                <TwitterFeed/>
                <WeatherFor/>
            </div>
        </div>
    </div>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
