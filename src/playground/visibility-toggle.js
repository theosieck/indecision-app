class VisbilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide visibility' : 'Show visibility'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Details!</p>
                    </div>
                )}

            </div>
        );
    }
}

ReactDOM.render(<VisbilityToggle />, document.getElementById('app'));

// const app = {
//     title: 'Visbility Toggle',
//     button: 'Show details',
//     details: ''
// };

// const toggle = () => {
//     if(app.details) {
//         app.button = 'Show details';
//         app.details = '';
//     } else {
//         app.button = 'Hide details';
//         app.details = 'Hey. These are some details you can now see!';
//     }
//     reRender();
// }

// const appRoot = document.getElementById('app');
// const reRender = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggle}>{app.button}</button>
//             <p>{app.details}</p>
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }
// reRender();