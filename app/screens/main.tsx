import { Text } from '../atoms'
import Container from '../atoms/container'
import { NoteList } from '../components/note-list/note-list'

export const MainScreen = () => {
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList />
    </Container>
  )
}
