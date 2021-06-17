import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getGame, removeGame } from '../utils/games'

const Game = () => {
  const { id } = useParams()
  const history = useHistory()
  const game = getGame(id)
  const { name, gamers } = game

  const remove = () => {
    removeGame(id)
    history.push('/')
  }

  const startGame = () => {
    history.push(`play/${id}`)
  }

  return (
    <div className="page">
      <div className="container">
        <h1>{name}</h1>
        <h2>{gamers.length} Oyuncu</h2>
        <div>{gamers.join(', ')}</div>
        <div className="form-actions">
          <button type="button" className="primary-btn" onClick={remove}>
            Oyunu Sil
          </button>
          <button type="button" className="primary-btn" onClick={startGame}>
            Oyunu Başlat
          </button>
        </div>
      </div>
    </div>
  )
}

export default Game
