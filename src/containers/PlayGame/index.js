import React from 'react'
import { usePlayGame } from '../../contexts/PlayGameContext'
import GamersList from './GamersList'
import MissionResult from './MissionResult'
import SelectCards from './SelectCards'
import './styles.scss'

const PlayGame = () => {
  const {
    roles: gamers,
    game: { name },
    dealRoles,
    gameState
  } = usePlayGame()

  return (
    <React.Fragment>
      <div className="align-center space-between">
        <h1>{name}</h1>
        {gameState === 'roles' && <span onClick={dealRoles}>Dağıt</span>}
      </div>

      {gameState === 'roles' && <GamersList gamers={gamers} />}
      {gameState === 'mission' && <SelectCards />}
      {gameState === 'show-result' && <MissionResult />}
    </React.Fragment>
  )
}

export default PlayGame
