import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { Icon } from '.'
import { getColor } from 'src/colors'

describe('Icon', () => {
  it('render correctly with required props', () => {
    render(
      <Icon
        name='tag'
        label='test-icon-tag'
      />
    )

    const subjectIcon = screen.getByLabelText('test-icon-tag')
    expect(subjectIcon).toBeInTheDocument()
    expect(subjectIcon.getAttribute('color')).toEqual(getColor('purple.800'))
  })

  it('render correctly with custom color', () => {
    render(
      <Icon
        name='tag'
        color='green.800'
        label='test-icon-tag'
      />
    )

    const subjectIcon = screen.getByLabelText('test-icon-tag')
    expect(subjectIcon).toBeInTheDocument()
    expect(subjectIcon.getAttribute('color')).toEqual(getColor('green.800'))
  })
})
