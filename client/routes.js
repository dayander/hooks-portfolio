import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from "./HeaderAndFooter/Header";
import Footer from './HeaderAndFooter/Footer'
import {Home} from './Home/Home'
import ResumePage from './Resume/ResumePage'
import ContactPage from './Contact/ContactPage'
import Work from './Work/Work'
import WorkDetails from './Work/WorkDetails'
import ConferencePresentationPage from './Work/ConferencePresentationPage'
import ContactSuccess from "./Contact/ContactSuccess";

export const routesObj = [
    {
        name: 'Home',
        nav: true,
        component: Home,
        path: '/',
        exact: true
    },
    {
        name: 'Work',
        nav: true,
        component: Work,
        path: '/work',
        exact: true
    },
    {
        name: 'Resume',
        nav: true,
        component: ResumePage,
        path: '/resume'
    },
    {
        name: 'Contact',
        nav: true,
        component: ContactPage,
        path: '/contact'
    },
    {
      name: 'Contact Success',
      nav: false,
      component: ContactSuccess,
      path: '/contact-success'
    },
    {
        name: 'Ignite UX',
        nav: false,
        path: '/work/igniteux2019',
        component: ConferencePresentationPage,
        exact: true
    },
    {
        name: 'Work Details',
        nav: false,
        component: WorkDetails,
        path: '/work/:project'
    },

]

const renderRoutes = routesObj.map((x, i) => {
    return <Route key={i} exact={x.exact} path={x.path} component={x.component} />
})

export const routes = (
    <React.Fragment>
        <Header/>
        <main id='content'>
            <Switch>
                {renderRoutes}
            </Switch>
        </main>
        <Footer/>
    </React.Fragment>
);

