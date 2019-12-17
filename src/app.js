console.log('App.js is running!');

// JSX - JavaScript XML - a javascript syntax extension provided by react
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
); // static template JSX expression - the () is just for formatting

var templateTwo = (
    <div>
        <h1>Jorie Sieck</h1>
        <p>Age: 20</p>
        <p>Location: Hoboken</p>
    </div>
);

var appRoot = document.getElementById('app');   // the div created in index.html

ReactDOM.render(templateTwo,appRoot);  // render the application - takes two args: expression to render and DOM element