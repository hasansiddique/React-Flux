$ = jQuery = require('jQuery');
var React = require('react');
var HomePage = require('./components/homeComponent');
var AboutPage = require('./components/about/aboutComponent');
var AuthorsPage = require('./components/authors/authorComponent');
var Header = require('./components/common/header');

var App = React.createClass({
    render: function () {
        var Child;

        switch (this.props.route) {
            case 'about':
                Child = AboutPage;
                break;
            case 'authors':
                Child = AuthorsPage;
                break;
            default:
                Child = HomePage;
        }
        return (
            <div>
                <Header/>

                <div className='container'>
                    <Child/>
                </div>
            </div>
        );
    }
});

function render() {
    var route = window.location.hash.substr(1);
    React.render(<App route={route}/>, document.getElementById('app'));
};

window.addEventListener('hashchange', render);
render();

