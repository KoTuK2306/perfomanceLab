import * as React from "react";
import { CircularProgress } from "./components";
import { mockedData } from "./mocks/mockedData";

function App() {
  React.useEffect(() => {
    console.log(mockedData);
  });

  return (
    <>
      <CircularProgress />
    </>
  );
}

export default App;
