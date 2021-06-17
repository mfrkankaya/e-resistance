import React from 'react'
import { Link } from 'react-router-dom'
import GamesList from '../containers/GamesList'

const Home = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="align-center space-between">
          <h1>KAYITLI OYUNLAR</h1>
          <Link to="/create-game" className="create-game">
            +
          </Link>
        </div>
        <GamesList />
      </div>
    </div>
  )
}

export default Home
