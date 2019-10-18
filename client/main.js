import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { routes } from './routes'
import { ThemeProvider } from '@material-ui/styles';
import Context from './state/context/context'
import ContextState from './state/context/contextStateConfig'
import { theme } from "./styles/theme";
import history from './util/History'



const initialState = typeof window !== "undefined" && window && window.INITIAL_STATE




export default function App(){
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);


    return(
        <Context.Provider value={{...initialState, ...ContextState()}}>
            <Router history={history}>
                <ThemeProvider theme={theme}>
                    {routes}
                </ThemeProvider>
            </Router>
        </Context.Provider>

    )
}

if (typeof window !== 'undefined') {
    ReactDOM.hydrate(
        <App/>,
        document.getElementById('app')
    )
}