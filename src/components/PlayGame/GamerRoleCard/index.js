import React from 'react'
import classNames from 'classnames'
import './styles.scss'
import { ROLES_MAP } from '../../../utils/roles'
import { usePlayGame } from '../../../contexts/PlayGameContext'
import useRoleToggle from '../../../hooks/useRoleToggler'

const GamerRoleCard = ({ gamer }) => {
  const { name, role } = gamer
  const { selectedGamers, selectGamer, unSelectGamer, roles } = usePlayGame()
  const [showRole, toggleShowRole, resetShowRole] = useRoleToggle(false)
  const selected = selectedGamers.includes(name)

  React.useEffect(resetShowRole, [roles])

  const handleToggle = e => {
    e.stopPropagation()
    toggleShowRole()
  }

  const handleSelect = () => {
    selected ? unSelectGamer(name) : selectGamer(name)
  }

  return (
    <div className={classNames('card gamer-role-card', { selected })} onClick={handleSelect}>
      <h4>{name}</h4>
      <span>Rol: {showRole ? ROLES_MAP[role] : 'Gizli'}</span>
      <button onClick={handleToggle}>Gizle/Göster</button>
    </div>
  )
}

export default GamerRoleCard
