import { createBox } from '@shopify/restyle'
import { FC, useCallback } from 'react'
import {
  FlatList,
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent
} from 'react-native'
import { Box } from '../../atoms'
import { Theme } from '../../themes'
import { Note } from '../../types/models.types'
import { NoteListItem } from './note-list-item'
import NOTES from '../../fixtures/notes'

const StyledFlatList = createBox<Theme, FlatListProps<Note>>(FlatList)

export interface NoteListProps {
}

export const NoteList: FC<NoteListProps> = ({
}) => {
  const renderItem = useCallback(
    ({ item }: { item: Note }) => {
      return (
        <NoteListItem
          {...item}
        />
      )
    },
    []
  )

  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={NOTES}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width="100%"
      scrollEventThrottle={16}
      
    />
  )
}
