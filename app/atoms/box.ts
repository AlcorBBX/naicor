import { ComponentProps } from 'react'
import { Theme } from '../themes/light'
import { createBox } from '@shopify/restyle'

export const Box = createBox<Theme>()
export type BoxProps = ComponentProps<typeof Box>
