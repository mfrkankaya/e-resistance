import * as localstore from './localstore'
import uniqid from 'uniqid'

export const getGames = () => localstore.getItem('games') || []

export const addGame = game => {
  const currentGames = getGames()
  game.id = uniqid()
  localstore.setItem('games', [...currentGames, game])
}

export const removeGame = gameId => {
  const currentGames = getGames()
  const newGames = currentGames.filter(currentGame => currentGame.id !== gameId)
  localstore.setItem('games', newGames)
}
