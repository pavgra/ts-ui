import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Page from 'components/Page';
import routes from 'routes';
import { matchPath } from 'react-router';
import Menu from './components/Menu';

const useStyles = makeStyles((theme) => ({
}));

const menuRoutes = routes.filter(r => typeof r.showInMenu === 'undefined' || r.showInMenu);

function App() {
    const classes = useStyles();

    const activeRoute = routes.find(item => matchPath(window.location.pathname, {
        path: item.path,
        exact: true
    }));

    const menu = (typeof activeRoute?.showDrawer === 'undefined' || activeRoute.showDrawer)
        ? (
            <Menu menuItems={menuRoutes} />
        )
        : null;

    return (
        <Router>
            <Page title="DB screening center" menu={menu}>
                <Switch>
                    {routes.map(r => (
                        <Route exact path={r.path} component={r.component} />
                    ))}
                </Switch>
            </Page>
        </Router>
    );
}

export default App;
