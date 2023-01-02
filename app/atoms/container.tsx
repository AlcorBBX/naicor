import { BoxProps } from '@shopify/restyle'
import { FC, ReactNode } from 'react'
import { Box } from '.'
import { Theme } from '../themes'

const Container: FC<BoxProps<Theme> & { children: ReactNode }> = props => (
  <Box {...props} flex={1} backgroundColor="$background">
    {props.children}
  </Box>
)

export default Container
