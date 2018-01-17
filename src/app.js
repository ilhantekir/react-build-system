import React from 'react';
import ReactDOM from 'react-dom';

import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;
import 'bootstrap';

import './styles/styles.scss';

console.log($().jquery);

const template = (
    <div className="container">
        <span className="input-group-btn">
            <button type="button" className="btn btn-primary">Go!</button>
        </span>
    </div>
);

ReactDOM.render(template, document.getElementById('app'));
