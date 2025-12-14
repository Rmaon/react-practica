import React from 'react'
import ToolList from './components/ToolList'
import Counter from './components/Counter'
import DragList from './components/DragList'

const App: React.FC = () => (
  <div data-testid="app">
    <h1>{'>'} HACKER_TERMINAL</h1>
    <ToolList />
    <Counter />
    <DragList />
  </div>
)

export default App
