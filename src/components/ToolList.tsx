import React from 'react'

const tools = ['nmap', 'hydra', 'wireshark']

const ToolList: React.FC = () => (
  <div className="section" data-testid="tool-list">
    <div>{'>'} Tools:</div>
    {tools.map(t => <div key={t} data-testid="tool">- {t}</div>)}
  </div>
)

export default ToolList
