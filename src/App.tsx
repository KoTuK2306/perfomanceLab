import { useEffect, useState } from "react";
import { mockedData } from "./mocks/mockedData";
import { LoadingPage } from "./pages";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (function () {
      setIsLoading(true);
      const promise = new Promise((resolve) =>
        setTimeout(() => resolve(mockedData), 1500)
      );
      promise.then((data) => {
        setIsLoading(false);
        console.log(data);
      });
    })();
  }, []);

  return <>{isLoading && <LoadingPage />}</>;
}

export default App;
