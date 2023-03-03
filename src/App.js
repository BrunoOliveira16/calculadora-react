import Input from './components/Input'
import Button from './components/Button'
import { Container, Content, ContentButtons } from './styles'

const App = () => {
  return (
    <Container>
      <Content>
        <Input />
        <ContentButtons>
          <Button label="7"/>
          <Button label="8"/>
          <Button label="9"/>
          <Button label="C"/>
          <Button label="4"/>
          <Button label="5"/>
          <Button label="6"/>
          <Button label="x"/>
          <Button label="1"/>
          <Button label="2"/>
          <Button label="3"/>
          <Button label="-"/>
          <Button label="0"/>
          <Button label="="/>
          <Button label="/"/>
          <Button label="+"/>
        </ContentButtons>
      </Content>
    </Container>
  );
}

export default App;
