import Input from './components/Input'
import Button from './components/Button'
import { Container, Content, ContentButtons } from './styles'

const App = () => {
  return (
    <Container>
      <Content>
        <Input />
        <ContentButtons>
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </ContentButtons>
      </Content>
    </Container>
  );
}

export default App;
