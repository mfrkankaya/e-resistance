import React from 'react'
import './styles/app.scss'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from './routes/Home'
import CreateGame from './routes/CreateGame'
import Play from './routes/Play'
import Game from './routes/Game'

const Root = () => (
  <Router>
    <React.Fragment>
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create-game" component={CreateGame} />
        <Route path="/play/:id" component={Play} />
        <Route path="/:id" component={Game} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  </Router>
)

const App = () => {
  return <Root />
}

export default App
