import { Container, Text } from '../atoms'
import { HeaderBar } from '../components/header-bar'
import { NoteList } from '../components/note-list/note-list'

export const MainScreen = () => {
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList />
      <HeaderBar>
        <Text>fds</Text>
      </HeaderBar>
    </Container>
  )
}
