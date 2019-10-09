import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './routes'
import { ThemeProvider } from '@material-ui/styles';
import Context from './state/context/context'
import { theme } from "./styles/theme";


const initialState = typeof window !== "undefined" && window && window.INITIAL_STATE


export default function App(){
    return(
        <Context.Provider value={initialState}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    {routes}
                </ThemeProvider>
            </BrowserRouter>
        </Context.Provider>

    )
}

if (typeof window !== 'undefined') {
    ReactDOM.hydrate(
        <App/>,
        document.getElementById('app')
    )
}