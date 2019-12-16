console.log('App.js is running!');

// JSX - JavaScript XML - a javascript syntax extension provided by react
//var template = <p>This is JSX from app.js!</p>; // static template JSX expression
var template = React.createElement("h1",    // regular js from Babel.comgot
    {id: "someID"},
    "Something new");
var appRoot = document.getElementById('app');   // the div created in index.html

ReactDOM.render(template,appRoot);  // render the application - takes two args: expression to render and DOM element