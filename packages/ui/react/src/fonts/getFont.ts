import get from 'lodash/get'

const fonts = {
  roboto: 'Roboto',
  montserrat: 'Montserrat',
  /**
   * Font Family Mono
   *
   * Code obtained from TailwindCSS
   * Source code from tailwindlabs @ https://github.com/tailwindlabs/tailwindcss
   *
   * @see {@link https://tailwindcss.com/docs/font-family | TailwindCSS}
   * @see {@link https://github.com/tailwindlabs/tailwindcss/blob/b1733ac1fd19cd84a4cf973cdc1630a1a879e356/packages/tailwindcss/theme.css#L371-L372}
   */
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
} as const

/**
 * Lists all valid font codes
 */
type Font = keyof typeof fonts

/**
 * Gets the font' CSS Font Family list
 */
const getFont = <TFont extends Font>(name: TFont): (typeof fonts)[TFont] =>
  get(fonts, name)

export type { Font }

export { getFont }
