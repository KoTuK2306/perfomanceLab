import { useEffect } from "react";
import { mockedData } from "./mocks/mockedData";
import { LoadingPage } from "./pages";

function App() {
  useEffect(() => {
    console.log(mockedData);
  });

  return (
    <>
      <LoadingPage />
    </>
  );
}

export default App;
