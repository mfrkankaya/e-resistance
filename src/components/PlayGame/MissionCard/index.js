import classNames from 'classnames'
import React from 'react'
import { usePlayGame } from '../../../contexts/PlayGameContext'

const MissionCard = () => {
  const { selectCard } = usePlayGame()

  const handleSelect = type => () => {
    selectCard(type)
  }

  const reversed = Math.random() > 0.5

  return (
    <div className={classNames('mission-card-wrapper', { reversed })}>
      <div className="card select-card" onClick={handleSelect('mission')}>
        G
      </div>
      <div className="card select-card" onClick={handleSelect('sabotage')}>
        S
      </div>
    </div>
  )
}

export default MissionCard
