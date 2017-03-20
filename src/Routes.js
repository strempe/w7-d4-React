// Load React
import React from 'react'

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './Reducers'
const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
import Notes from './components/Notes'
import Note from './components/Note'
import NewNote from './components/NewNote'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Notes} />
                <Route path="/note" component={Note} />
                <Route path="/new" component={NewNote} />              
                
            </Router>
        </Provider>
    }
}

export default Routes