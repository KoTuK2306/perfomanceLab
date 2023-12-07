import { useEffect } from "react";
import { mockedData } from "./mocks";
import { LoadingPage, MainPage } from "./pages";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { addItems, changeIsLoading } from "./store/slicers";
import { StoreProduct } from "./mocks/mockedData";
import { useAppSelector } from "./hooks/useAppSelector";

function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.app.isLoading);

  useEffect(() => {
    (function () {
      dispatch(changeIsLoading(true));
      const promise = new Promise<StoreProduct[]>((resolve) =>
        setTimeout(() => resolve(mockedData), 2000)
      );
      promise.then((data) => {
        dispatch(changeIsLoading(false));
        dispatch(addItems(data));
      });
    })();
  }, []);

  return (
    <>
      {isLoading && <LoadingPage />}
      <MainPage />
    </>
  );
}

export default App;
