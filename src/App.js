import React from 'react'
import './styles/app.scss'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import CreateGame from './routes/CreateGame'

const Root = () => (
  <Router>
    <React.Fragment>
      {/* <Header /> */}
      <Switch>
        {/* <Route path='/' exact component={Home} /> */}
        <Route path="/create-game" component={CreateGame} />
        {/* <Route path='/join' component={Join} /> */}
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  </Router>
)

const App = () => {
  return <Root />
}

export default App
