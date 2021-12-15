import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
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

reportWebVitals();
