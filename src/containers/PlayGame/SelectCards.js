import React from 'react'
import MissionCard from '../../components/PlayGame/MissionCard'
import { usePlayGame } from '../../contexts/PlayGameContext'
import uniqid from 'uniqid'

const SelectCards = () => {
  const { selectedGamers, showResult } = usePlayGame()

  if (selectedGamers.length === 0)
    return (
      <button className="primary-btn full-width" onClick={showResult}>
        Sonucu Göster
      </button>
    )

  return (
    <div className="mission-cards">
      {selectedGamers.map(() => (
        <MissionCard key={uniqid()} />
      ))}
    </div>
  )
}

export default SelectCards
