import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
  const todo = {
    text: 'Learn about testing',
    done: false
  }

  render(<Todo text={todo.text} done={todo.done} />)

  const element = screen.getByText('Learn about testing')
  expect(element).toBeDefined()
})