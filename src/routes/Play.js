import React from 'react'
import { useParams } from 'react-router-dom'
import PlayGame from '../containers/PlayGame'
import { PlayGameProvider } from '../contexts/PlayGameContext'
import { getGame } from '../utils/games'

const Play = () => {
  const { id } = useParams()
  const [game] = React.useState(getGame(id))

  return (
    <div className="page">
      <div className="container">
        <PlayGameProvider game={game}>
          <PlayGame />
        </PlayGameProvider>
      </div>
    </div>
  )
}

export default Play
