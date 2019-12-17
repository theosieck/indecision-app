console.log('App.js is running!');

// JSX - JavaScript XML - a javascript syntax extension provided by react
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: ['One', 'Two']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
); // static template JSX expression - the () is just for formatting

const user = {
    name: 'Jorie',
    age: 20,
    location: 'Hoboken'
};
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {user.location && <p>Location: {user.location}</p>}
    </div>
);

const appRoot = document.getElementById('app');   // the div created in index.html

ReactDOM.render(template,appRoot);  // render the application - takes two args: expression to render and DOM element