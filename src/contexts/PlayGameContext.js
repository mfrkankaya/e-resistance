import React from 'react'
import { generateRoles } from '../utils/roles'

const PlayGameContext = React.createContext(null)

export const PlayGameProvider = ({ game, children }) => {
  const { gamers } = game
  const [roles, setRoles] = React.useState(generateRoles(game))
  const [selectedGamers, setSelectedGamers] = React.useState([])
  const [gameState, setGameState] = React.useState('roles') // roles || mission || show-result
  const [selectedCards, setSelectedCards] = React.useState([])

  const dealRoles = () => {
    setRoles(generateRoles(game))
    setSelectedGamers([])
  }

  const selectGamer = gamer => setSelectedGamers(gamers => [...gamers, gamer])
  const unSelectGamer = gamer =>
    setSelectedGamers(gamers => gamers.filter(currentGamer => currentGamer !== gamer))
  const resetSelectedGamers = () => setSelectedGamers([])

  const goMission = () => setGameState('mission')
  const showResult = () => setGameState('show-result')
  const showRoles = () => setGameState('roles')
  const resetGameState = () => setGameState('roles')

  const selectCard = card => {
    const [, ...rest] = selectedGamers
    setSelectedGamers(rest)
    setSelectedCards(cards => [...cards, card])
  }

  const resetSelectedCards = () => setSelectedCards([])

  const goBackToRolesScreen = () => {
    resetSelectedCards()
    resetSelectedGamers()
    resetGameState()
  }

  return (
    <PlayGameContext.Provider
      value={{
        game,
        gamers,
        roles,
        dealRoles,
        selectedGamers,
        selectGamer,
        unSelectGamer,
        gameState,
        setGameState,
        goMission,
        showResult,
        showRoles,
        selectCard,
        selectedCards,
        goBackToRolesScreen
      }}
    >
      {children}
    </PlayGameContext.Provider>
  )
}

export const usePlayGame = () => React.useContext(PlayGameContext)
