import React from 'react'
import './styles.scss'

const GamerInput = React.forwardRef(({ removeGamer, removeEnabled, ...props }, ref) => {
  return (
    <div className="gamer-input-wrapper">
      <input ref={ref} {...props} />
      <button type="button" onClick={removeGamer} disabled={!removeEnabled}>
        -
      </button>
    </div>
  )
})

export default GamerInput
