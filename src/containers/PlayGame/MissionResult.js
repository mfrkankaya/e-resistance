import React from 'react'
import { usePlayGame } from '../../contexts/PlayGameContext'
import { MISSION_CARDS_MAP } from '../../utils/missionCards'
import uniqid from 'uniqid'

const MissionResult = () => {
  const { selectedCards, goBackToRolesScreen } = usePlayGame()
  return (
    <React.Fragment>
      <div className="result-cards">
        {selectedCards.map(card => (
          <div key={uniqid()} className="card result-card">
            {MISSION_CARDS_MAP[card]}
          </div>
        ))}
      </div>
      <button className="primary-btn full-width mt-1" onClick={goBackToRolesScreen}>
        Yeni göreve başla
      </button>
    </React.Fragment>
  )
}

export default MissionResult
