import type { HTMLProps } from 'react'
import React from 'react'

import { StyledLink } from './Link.styled'
import type { IconProps } from 'src/components/Primitives/Icon'
import { Icon } from 'src/components/Primitives/Icon'
import type { Color } from 'src/colors'
import type { Unwrap } from 'src/components/types'

type LinkProps = Omit<
  HTMLProps<HTMLAnchorElement>,
  'href' | 'target' | 'color' | 'ref' | 'as'
> & {
  color?: Color
  to?: HTMLProps<HTMLAnchorElement>['href']
  target?: '_blank' | '_self'
  iconProps?: Unwrap<Omit<IconProps, 'name'>>
  hideUnderline?: boolean
  hideUnderlineOnHover?: boolean
  hideExternalUrlIcon?: boolean
}

const Link = ({
  target = '_blank',
  children,
  color = 'purple.800',
  rel = 'noopener noreferrer',
  to: href,
  hideUnderline = false,
  hideUnderlineOnHover = false,
  hideExternalUrlIcon = false,
  iconProps,
  ...props
}: React.PropsWithChildren<LinkProps>) => {
  return (
    <StyledLink
      rel={rel}
      href={href}
      target={target}
      color={color}
      $showUnderline={!hideUnderline}
      $showUnderlineOnHover={!hideUnderlineOnHover}
      {...props}
    >
      {children ?? href}
      {!hideExternalUrlIcon && (
        <Icon
          name="openInNewWindow"
          {...iconProps}
        />
      )}
    </StyledLink>
  )
}

export type { LinkProps }
export { Link }
