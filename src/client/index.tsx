import * as React from "react";
import * as ReactDOM from 'react-dom';
interface HelloProps { name: string }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
class App extends React.Component<HelloProps, {}> {
    render() {
        return <h1 onClick={() => {
            alert('test')
        }}>Hello, {this.props.name}!</h1>;
    }
}

ReactDOM.render(<App name='lee'/>, document.getElementById('root'));