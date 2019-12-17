console.log('App.js is running!');

// JSX - JavaScript XML - a javascript syntax extension provided by react
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
}
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
); // static template JSX expression - the () is just for formatting

var user = {
    name: 'Jorie',
    age: 20,
    location: 'Hoboken'
};
function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');   // the div created in index.html

ReactDOM.render(templateTwo,appRoot);  // render the application - takes two args: expression to render and DOM element