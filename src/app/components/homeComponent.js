'use strict';

var React = require('react');

var HomePage = React.createClass({
    render: function () {
        return (
            <div className='jumbotron'>
                <h1>Video Tutorial</h1>

                <p>React, React Router, Flux</p>
            </div>
        );
    }
});

module.exports = HomePage;