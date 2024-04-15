import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
describe('Page', () => {
  it('renders a welcome test', () => {
    render(<Page />)
 
    const welcomeText = screen.getByTitle("welcome");
    expect(welcomeText).toHaveTextContent('Welcome to Acme. This is the example for the Next.js Learn Course')
  })
})