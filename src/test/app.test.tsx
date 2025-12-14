import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'
import ToolList from '../components/ToolList'
import Counter from '../components/Counter'
import DragList from '../components/DragList'

// App tests
describe('App', () => {
  it('renderiza correctamente', () => {
    render(<App />)
    expect(screen.getByTestId('app')).toBeInTheDocument()
  })

  it('muestra el título', () => {
    render(<App />)
    expect(screen.getByText(/HACKER_TERMINAL/)).toBeInTheDocument()
  })
})

// ToolList tests
describe('ToolList', () => {
  it('renderiza la lista', () => {
    render(<ToolList />)
    expect(screen.getByTestId('tool-list')).toBeInTheDocument()
  })

  it('muestra 3 herramientas', () => {
    render(<ToolList />)
    expect(screen.getAllByTestId('tool')).toHaveLength(3)
  })
})

// Counter tests
describe('Counter', () => {
  it('inicia en 0', () => {
    render(<Counter />)
    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })

  it('incrementa al hacer click', () => {
    render(<Counter />)
    fireEvent.click(screen.getByTestId('hack-btn'))
    expect(screen.getByTestId('count')).toHaveTextContent('1')
  })

  it('resetea a 0', () => {
    render(<Counter />)
    fireEvent.click(screen.getByTestId('hack-btn'))
    fireEvent.click(screen.getByTestId('reset-btn'))
    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })
})

// DragList tests
describe('DragList', () => {
  it('muestra 3 items', () => {
    render(<DragList />)
    expect(screen.getByTestId('item-script1.sh')).toBeInTheDocument()
    expect(screen.getByTestId('item-script2.py')).toBeInTheDocument()
  })

  it('tiene zona de drop', () => {
    render(<DragList />)
    expect(screen.getByTestId('drop-zone')).toBeInTheDocument()
  })

  it('mueve item al hacer drop', () => {
    render(<DragList />)
    const item = screen.getByTestId('item-script1.sh')
    const zone = screen.getByTestId('drop-zone')
    
    fireEvent.dragStart(item)
    fireEvent.drop(zone)
    
    expect(screen.queryByTestId('item-script1.sh')).not.toBeInTheDocument()
    expect(zone).toHaveTextContent('script1.sh')
  })
})
