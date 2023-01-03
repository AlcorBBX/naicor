import { FC } from 'react'
import { Bar } from '../atoms'
import AnimatedBox, { AnimatedBoxProps } from '../atoms/animated-box'

type HeaderBarProps = AnimatedBoxProps & {
  children: React.ReactNode
  onSidebarToggle?: () => any
}

export const HeaderBar: FC<HeaderBarProps> = ({
  children,
  onSidebarToggle,
  ...rest
}) => {
  return (
    <AnimatedBox position="absolute" top={0} left={0} right={0} {...rest}>
      <Bar variant='headerBar'>{children}</Bar>
    </AnimatedBox>
  )
}
