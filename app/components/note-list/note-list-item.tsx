import { FC } from 'react'
import { Box, Text } from '../../atoms'
import { Note } from '../../types/models.types'

export interface ListItemProps extends Note {
  onPress?: (noteId: string) => void
  onSwipeLeft?: (noteId: string, done: () => void) => void
}

export const NoteListItem: FC<ListItemProps> = props => {
  return (
    <Box bg="$background">
      <Box>
        <Text ellipsizeMode="tail" numberOfLines={1} fontWeight="bold" mb="xs">
          {props.title}
        </Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={2}
          fontSize={14}
          opacity={0.7}
        >
          {props.body}
        </Text>
      </Box>
    </Box>
  )
}
