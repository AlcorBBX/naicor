import {
  createRestyleComponent,
  VariantProps,
  createVariant
} from '@shopify/restyle'
import { Theme } from '../themes'
import { Box, BoxProps } from './box'

export const Bar = createRestyleComponent<
  VariantProps<Theme, 'barVariants'> & BoxProps,
  Theme
>([createVariant({ themeKey: 'barVariants' })], Box)
