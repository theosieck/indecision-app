'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML - a javascript syntax extension provided by react
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var resetOptions = function resetOptions() {
    app.options = [];
    renderApp();
};

var onMakeDecision = function onMakeDecision() {
    var randNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randNum];
    alert(option);
};

var appRoot = document.getElementById('app');
var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options:' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: resetOptions },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
