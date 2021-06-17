import React from 'react'
import useToggle from './useToggle'

const useRoleToggle = (initialValue = false) => {
  const [state, toggleState, setState] = useToggle(initialValue)
  const [toggleCount, setToggleCount] = React.useState(0)

  const isToggalable = toggleCount < 2
  const toggle = () => {
    if (isToggalable) {
      setToggleCount(count => count + 1)
      toggleState()
    }
  }

  const reset = () => {
    setToggleCount(0)
    setState(initialValue)
  }

  return [state, toggle, reset]
}

export default useRoleToggle
