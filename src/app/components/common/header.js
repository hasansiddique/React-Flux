'use strict';

var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <a href='index.html' className='navbar-brand'>
                        <img src='images/tutorial.jpg' alt='Tutorials' height='25'/>
                    </a>
                    <ul className='nav navbar-nav'>
                        <li><a href='index.html'>Home</a></li>
                        <li><a href='index.html#authors'>Authors</a></li>
                        <li><a href='index.html#about'>About</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
