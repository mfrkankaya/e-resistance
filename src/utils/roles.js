import arrayShuffle from 'array-shuffle'

export const ROLES_MAP = {
  commander: 'K',
  assassin: 'S',
  insurgent: 'D',
  spy: 'C'
}

export const generateRoles = game => {
  const { gamers } = game
  const gamerCount = gamers.length
  const half = Math.floor(gamerCount / 2)
  let roles = ['commander', 'assassin']

  if (gamerCount % 2 === 0)
    roles = [
      ...roles,
      ...Array.from({ length: half }).fill('insurgent'),
      ...Array.from({ length: half - 2 }).fill('spy')
    ]
  else
    roles = [
      ...roles,
      ...Array.from({ length: half }).fill('insurgent'),
      ...Array.from({ length: half - 1 }).fill('spy')
    ]

  const shuffledRoles = arrayShuffle(roles)

  return gamers.map((gamer, index) => ({ name: gamer, role: shuffledRoles[index] }))
}
