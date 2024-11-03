import { HTMLAttributes } from 'react'

import { getColor } from 'src/colors'
import type { Color } from 'src/colors'
import { Icon as IconName, iconLoader } from 'src/icons'

type IconProps = {
  /** Defines which icon to render */
  name: IconName
  /** Defines element height and width */
  size?: number
  /** Defines element foreground/fill color */
  color?: Color
  /** icon opacity, a number between 0 and 1 */
  opacity?: number
  /** Defines a string value that labels the current element */
  label?: HTMLAttributes<HTMLOrSVGImageElement>['aria-label']
}

/** Color to be used when IconProps.color is undefined */
const COLOR_FALLBACK = 'purple.800' satisfies Color

/**
 * Loads icon from iconLoader
 *
 * @see {@link src/icons/iconLoader.tsx:iconLoader}
 */
const Icon = (props: IconProps) =>
  iconLoader(
    props.name,
    props.size,
    getColor(props.color ?? COLOR_FALLBACK),
    props.opacity,
    props.label
  )

export type { IconProps }
export { Icon }
