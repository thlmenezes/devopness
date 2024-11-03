---
"@devopness/ui-react": minor
---

Moved `colors`, `fonts`, `hooks`, `icons` to subpaths exports `"@devopness/ui-react/<subpath>"`

This library is centered around distributing Devopness UI React components.

Currently, it includes other utils, like `colors` and `icons`, that could generate value as standalone packages,
to enable fast iteration by reducing the number of packages that need to be maintained.

The downside of this design choice is that this library requires the user to install all packages.

Using [subpath exports](https://nodejs.org/docs/v22.11.0/api/packages.html#subpath-exports) enables the user to, at least, start thinking about components and other utils as separated concerns.

This update may require users to update imports.

BEFORE:

Every util and component available in this library is accessed using `@devopness/ui-react` export.

```ts
import { Button, getFont, iconLoader, getColor } from "@devopness/ui-react"
```

AFTER:

The default import (`"@devopness/ui-react"`) is now restricted to exporting components

The other utils can be accessed using their own subpaths, like the example below

```ts
import { Button } from "@devopness/ui-react"
import { getFont } from "@devopness/ui-react/fonts"
import { getColor } from "@devopness/ui-react/colors"
import { iconLoader } from "@devopness/ui-react/icons"
```
