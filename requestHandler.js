import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './client/main'
import axios from 'axios'
import {StaticRouter} from 'react-router-dom';
import { routes } from './client/routes'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import { theme } from './client/styles/theme'
import Context from './client/state/context/context'

function handleRender(req, res){
    axios.get('http://localhost:3001/projects')
        .then(response => {
            const initStore = {}
            response.data.forEach(project =>{
                initStore[project.projectName] = project;
            })
            const sheets = new ServerStyleSheets();


            //const store = createStore(reducers, {  "projects": response.data,  "posts":[] } )
            const initialState = JSON.stringify({  "projects": response.data}).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
            const reactComponent = renderToString(
                <Context.Provider value={{  "projects": response.data}}>
                    <StaticRouter location={req.url} context={{}}>
                        { sheets.collect(
                            <ThemeProvider theme={theme}>
                            {routes}
                            </ThemeProvider>)}

                    </StaticRouter>
                </Context.Provider>
            );
            const css = sheets.toString();

            res.status(200).render('index', {reactComponent, initialState, css })

        })
        .catch(err => {
            console.log('#Initial Server-side rendering error', err);
        })
}

module.exports = handleRender