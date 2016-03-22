'use strict';

var React = require('react');

var AboutPage = React.createClass({
    render: function () {
        return (
            <div className='jumbotron'>
                <h1>About page</h1>

                <p>React, React Router, Flux</p>
            </div>
        );
    }
});

module.exports = AboutPage;
