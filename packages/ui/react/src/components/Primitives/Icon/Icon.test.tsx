import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { Icon } from '.'
import { getColor, getOpacity } from 'src/colors'

describe('Icon', () => {
  it('render correctly with required props', () => {
    render(
      <Icon
        name="tag"
        ariaLabel="test-icon-tag"
      />
    )

    const subjectIcon = screen.getByLabelText('test-icon-tag')
    expect(subjectIcon).toBeInTheDocument()
    expect(subjectIcon.getAttribute('color')).toEqual(getColor('purple.800'))
  })

  it('render correctly with custom color', () => {
    render(
      <Icon
        name="tag"
        color="green.800"
        ariaLabel="test-icon-tag"
      />
    )

    const subjectIcon = screen.getByLabelText('test-icon-tag')
    expect(subjectIcon).toBeInTheDocument()
    expect(subjectIcon.getAttribute('color')).toEqual(getColor('green.800'))
  })

  it('render correctly with custom color and opacity', () => {
    render(
      <Icon
        name="tag"
        color="green.800"
        opacity={0.7}
        ariaLabel="test-icon-tag"
      />
    )

    const subjectIcon = screen.getByLabelText('test-icon-tag')
    expect(subjectIcon).toBeInTheDocument()
    expect(subjectIcon.getAttribute('color')).toEqual(
      getOpacity(getColor('green.800'), 0.7)
    )
  })
})
