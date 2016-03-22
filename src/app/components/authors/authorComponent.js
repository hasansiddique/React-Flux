'use strict';

var React = require('react');
var authorMock = require('../../../mockApi/authors.mock');

var Authors = React.createClass({
    getInitialState: function () {
        return {
            authors: []
        }
    },
    componentWillMount: function () {
        this.setState({authors: authorMock.getAllAuthors()})
    },
    render: function () {
        var createAuthorRow = function (author) {
            return (
                <tr key={author.id}>
                    <td>
                        <a href={'/#authors/' + author.id}> {author.id} </a>
                    </td>
                    <td>
                        {author.firstName} {author.lastName}
                    </td>
                </tr>
            );
        };
        return (
            <div>
                <h1>Authors</h1>
                <table className='table table-bordered'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                    {this.state.authors.map(createAuthorRow, this)}
                </table>
            </div>
        );
    }
});

module.exports = Authors;