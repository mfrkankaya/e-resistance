import React from 'react'
import GamerRoleCard from '../../components/PlayGame/GamerRoleCard'
import { usePlayGame } from '../../contexts/PlayGameContext'

const GamersList = ({ gamers }) => {
  const { goMission, selectedGamers } = usePlayGame()
  const missionAvailable = selectedGamers.length > 1

  return (
    <React.Fragment>
      <div className="gamer-role-cards">
        {gamers.map(gamer => (
          <GamerRoleCard key={gamer.name} gamer={gamer} />
        ))}
      </div>
      <button
        type="button"
        className="primary-btn full-width mt-1"
        onClick={goMission}
        disabled={!missionAvailable}
      >
        Göreve Gönder
      </button>
    </React.Fragment>
  )
}

export default GamersList
