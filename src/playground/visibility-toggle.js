const app = {
    title: 'Visbility Toggle',
    button: 'Show details',
    details: ''
};

const toggle = () => {
    if(app.details) {
        app.button = 'Show details';
        app.details = '';
    } else {
        app.button = 'Hide details';
        app.details = 'Hey. These are some details you can now see!';
    }
    reRender();
}

const appRoot = document.getElementById('app');
const reRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggle}>{app.button}</button>
            <p>{app.details}</p>
        </div>
    );

    ReactDOM.render(template, appRoot);
}
reRender();