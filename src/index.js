import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './style/reset.css';
import './style/variables.css';
import App from './components/App/App';
import Data from "./store/data";

export const Context = createContext(null);

ReactDOM.render(
    <Context.Provider value={{
        data: new Data()
    }}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Context.Provider>,
    document.getElementById('root')
);

