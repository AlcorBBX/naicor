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
  // contentInsetTop: number
  // ListHeaderComponent?: React.ComponentType<any> | null | undefined
  // onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  // onItemPress: (noteId: string) => void
  // onItemSwipeLeft: (noteId: string, cancel: () => void) => void
}

export const NoteList: FC<NoteListProps> = ({
  // ListHeaderComponent,
  // contentInsetTop,
  // onItemPress,
  // onItemSwipeLeft,
  // onScroll
}) => {
  const renderItem = useCallback(
    ({ item }: { item: Note }) => {
      return (
        <NoteListItem
          {...item}
          // onPress={onItemPress}
          // onSwipeLeft={onItemSwipeLeft}
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
      // onScroll={onScroll}
      scrollEventThrottle={16}
      ListHeaderComponent={
        <Box>
          <>
            <Box width="100%" 
            // height={contentInsetTop}
            ></Box>
            {/* {ListHeaderComponent && <ListHeaderComponent />} */}
          </>
        </Box>
      }
    />
  )
}
