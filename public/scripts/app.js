'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML - a javascript syntax extension provided by react
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
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

var user = {
    name: 'Jorie',
    age: 20,
    location: 'Hoboken'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app'); // the div created in index.html

ReactDOM.render(templateTwo, appRoot); // render the application - takes two args: expression to render and DOM element
