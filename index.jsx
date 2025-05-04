import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <h1>Hola, mundo!</h1>
            <p>Este es un ejemplo básico de un componente en React.</p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));