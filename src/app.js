import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './configureStore'
import Home from './containers'
import LoginForm from './containers/Login/LoginForm'
import RegisterForm from './containers/Login/RegisterForm'
import NoMatchFound from './NoMatchFound'

export default function App() {
    console.log(store, 'store')
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/login" component={LoginForm} exact />
                    <Route path="/register" component={RegisterForm} exact />
                    <Route component={NoMatchFound} />
                </Switch>
            </Router>
        </Provider>
    )
}
