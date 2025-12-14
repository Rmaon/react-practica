import React, { useState } from 'react'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="section" data-testid="counter">
      <div>{'>'} Hacks: <span data-testid="count">{count}</span></div>
      <button className="btn" onClick={() => setCount(c => c + 1)} data-testid="hack-btn">
        [HACK]
      </button>
      <button className="btn" onClick={() => setCount(0)} data-testid="reset-btn">
        [RESET]
      </button>
    </div>
  )
}

export default Counter
