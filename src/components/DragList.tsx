import React, { useState } from 'react'

const initial = ['script1.sh', 'script2.py', 'script3.rb']

const DragList: React.FC = () => {
  const [available, setAvailable] = useState(initial)
  const [queue, setQueue] = useState<string[]>([])
  const [dragged, setDragged] = useState<string | null>(null)
  const [over, setOver] = useState(false)

  const onDrop = () => {
    if (dragged && available.includes(dragged)) {
      setAvailable(available.filter(i => i !== dragged))
      setQueue([...queue, dragged])
    }
    setDragged(null)
    setOver(false)
  }

  return (
    <div className="section" data-testid="drag-list">
      <div>{'>'} Scripts:</div>
      {available.map(item => (
        <div
          key={item}
          className="item"
          draggable
          onDragStart={() => setDragged(item)}
          data-testid={`item-${item}`}
        >
          {item}
        </div>
      ))}
      <div
        className={`drop-zone ${over ? 'over' : ''}`}
        onDragOver={e => { e.preventDefault(); setOver(true) }}
        onDragLeave={() => setOver(false)}
        onDrop={onDrop}
        data-testid="drop-zone"
      >
        {queue.length === 0 ? 'Drop here' : queue.map(q => <div key={q}>{q}</div>)}
      </div>
    </div>
  )
}

export default DragList
