import Button from "./component/Button";
import Container from "./component/Container";

function App() {
  return (
    <main>
      <Container as={Button} />
    </main>
  );
}

export default App;
