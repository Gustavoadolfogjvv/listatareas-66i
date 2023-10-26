import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './components/Heading';
import Subheading from './components/Subheading';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container>
        <Heading classroon='66i' enable={true} />
        <Subheading></Subheading>
      </Container>
    </div>
  );
}

export default App;
