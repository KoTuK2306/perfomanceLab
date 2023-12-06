import * as React from "react";
import { useState } from "react";
import { mockedData } from "./mocks/mockedData";

function App() {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    console.log(mockedData);
  });

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
