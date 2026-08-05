import { useRef } from "react";
import Button from "./component/Button";
import Form, { type FormHandle } from "./component/Form";
import Input from "./component/Input";

function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    if (
      !data ||
      typeof data !== "object" ||
      !("name" in data) ||
      !("age" in data)
    ) {
      return;
    }

    console.log(data);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
