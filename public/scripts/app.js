'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML - a javascript syntax extension provided by react
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
); // static template JSX expression - the () is just for formatting

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Jorie Sieck'
    ),
    React.createElement(
        'p',
        null,
        'Age: 20'
    ),
    React.createElement(
        'p',
        null,
        'Location: Hoboken'
    )
);

var appRoot = document.getElementById('app'); // the div created in index.html

ReactDOM.render(templateTwo, appRoot); // render the application - takes two args: expression to render and DOM element
