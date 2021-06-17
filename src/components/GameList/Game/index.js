import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const Game = ({ id, name, gamers }) => {
  return (
    <Link to={id} className="card game-list-item">
      <h2>{name}</h2>
      <div>{gamers.join(', ')}</div>
    </Link>
  )
}

export default Game
