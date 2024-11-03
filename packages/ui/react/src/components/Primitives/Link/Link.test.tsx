import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { Link } from '.'

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

  it('render correctly with primary color', () => {
    render(
      <Link
        color="purple.800"
        to={LinkProps.href}
      />
    )

    const expectedText = screen.getByText('https://www.devopness.com')

    expect(expectedText).toBeInTheDocument()
  })

  it('render correctly with secondary color', () => {
    render(
      <Link
        color="blue.950"
        to={LinkProps.href}
      />
    )

    const expectedText = screen.getByText('https://www.devopness.com')

    expect(expectedText).toBeInTheDocument()
  })

  it('render correctly with 13px font-size', () => {
    render(
      <Link
        fontSize="13px"
        to={LinkProps.href}
      />
    )

    const expectedText = screen.getByText('https://www.devopness.com')

    expect(expectedText).toBeInTheDocument()
  })

  it('render correctly with 14px font-size', () => {
    render(
      <Link
        fontSize="14px"
        to={LinkProps.href}
      />
    )

    const expectedText = screen.getByText('https://www.devopness.com')

    expect(expectedText).toBeInTheDocument()
  })

  it('render correctly with fontWeight normal', () => {
    render(
      <Link
        fontWeight="normal"
        to={LinkProps.href}
      />
    )

    const expectedText = screen.getByText('https://www.devopness.com')

    expect(expectedText).toBeInTheDocument()
  })
  it('render correctly with fontWeight bold', () => {
    render(
      <Link
        fontWeight="bold"
        to={LinkProps.href}
      />
    )

    const expectedText = screen.getByText('https://www.devopness.com')

    expect(expectedText).toBeInTheDocument()
  })
  it('render correctly with new style', () => {
    render(
      <Link
        style={{ color: 'red', backgroundColor: 'blue' }}
        to={LinkProps.href}
      />
    )

    const expectedText = screen.getByText('https://www.devopness.com')

    expect(expectedText).toBeInTheDocument()
  })
})
