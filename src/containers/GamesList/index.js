import React from 'react'
import Game from '../../components/GameList/Game'
import { getGames } from '../../utils/games'
import './styles.scss'

const GamesList = () => {
  const games = getGames()

  return (
    <div className="game-list">
      {games.map(game => (
        <Game key={game.id} {...game} />
      ))}
    </div>
  )
}

export default GamesList
