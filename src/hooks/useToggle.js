import React from 'react'

const useToggle = (initialValue = false) => {
  const [state, setState] = React.useState(initialValue)

  const toggle = () => setState(state => !state)

  return [state, toggle, setState]
}

export default useToggle
