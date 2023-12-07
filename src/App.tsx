import { useEffect } from "react";
import { mockedData, StoreProduct } from "./mocks";
import { LoadingPage, MainPage } from "./pages";
import { useAppDispatch, useAppSelector } from "./hooks";
import { addItems, changeIsLoading } from "./store/slicers";
import { InfoAlert } from "./components";

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
      <InfoAlert />
      {isLoading && <LoadingPage />}
      <MainPage />
    </>
  );
}

export default App;
