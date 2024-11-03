import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { Link } from '.'
import { getColor } from 'src/colors'

const LinkProps = {
  href: 'https://www.devopness.com',
}

describe('Link', () => {
  it('render correctly', () => {
    render(<Link to={LinkProps.href}>LinkComponent</Link>)

    const expectedText = screen.getByText('LinkComponent')
    expect(expectedText).toBeInTheDocument()
  })

  it('render correctly without props.children', () => {
    render(<Link to={LinkProps.href} />)

    const expectedText = screen.getByText('https://www.devopness.com')
    expect(expectedText).toBeInTheDocument()
  })

  it('render correctly with color', () => {
    render(
      <Link
        color="purple.800"
        to={LinkProps.href}
      />
    )

    const expectedText = screen.getByText('https://www.devopness.com')
    expect(expectedText).toBeInTheDocument()
    expect(expectedText.getAttribute('color')).toEqual(getColor('purple.800'))
  })

  it('render correctly with new style', () => {
    const styles = {
      color: '#ff0000',
      backgroundColor: '#00ff00'
    } satisfies React.CSSProperties

    render(
      <Link
        style={styles}
        to={LinkProps.href}
      />
    )

    const expectedText = screen.getByText('https://www.devopness.com')
    expect(expectedText).toBeInTheDocument()
    expect(expectedText).toHaveStyle('color: #ff0000;')
    expect(expectedText).toHaveStyle('background-color: #00ff00;')
  })
})
