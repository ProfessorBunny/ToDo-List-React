import { useState } from "react";
import Form from "./Form";

const App = () => {
  const [items, setitems] = useState([]);
  return (
    <section className="section-center">
      <Form />
    </section>
  );
};

export default App;
