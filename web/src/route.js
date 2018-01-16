import React, { Component } from 'react'
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
// import { userIsAuthenticated, userIsNotAuthenticated } from '../modules/auth/hocs/auth';
// import NotFoundPage from '../pages/NotFoundPage'
// import ErrorPage from '../pages/ErrorPage'
import IndexPage from './pages/IndexPage'
// import AppLayout from '../modules/app/components/layouts/AppLayout'
// import AuthConnectedPage from "../pages/AuthConnected";
import configureStore from './store'

class IndexRoute extends Component {

    render() {
        let { store, persistor } = configureStore()
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Router>
                        <Switch>
                            <Route path="/" exact component={IndexPage} />
                            {/* <Route path="/" exact component={userIsNotAuthenticated(IndexPage)} />
                            <Route path="/auth/connected" component={AuthConnectedPage} />
                            <Route path="/error" component={ErrorPage} />
                            <Route path="/" component={userIsAuthenticated(AppLayout)} />
                            <Route component={NotFoundPage} /> */}
                        </Switch>
                    </Router>
                </PersistGate>
            </Provider>
        )
    }

}

export default IndexRoute
