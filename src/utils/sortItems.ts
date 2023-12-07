import { Sorting } from "../enums";
import { StoreProduct } from "./../mocks/mockedData";

export const sortStoreItems = (
  items: StoreProduct[],
  sorting: Sorting
): StoreProduct[] => {
  const ruCollator = new Intl.Collator("ru-RU");

  if (sorting === Sorting.NAME_ASC) {
    return [...items].sort((prev, next) =>
      ruCollator.compare(prev.name, next.name)
    );
  }
  if (sorting === Sorting.NAME_DESC) {
    return [...items].sort((prev, next) =>
      ruCollator.compare(next.name, prev.name)
    );
  }
  if (sorting === Sorting.PRICE_ASC) {
    return [...items].sort((prev, next) => prev.price - next.price);
  }
  if (sorting === Sorting.PRICE_DESC) {
    return [...items].sort((prev, next) => next.price - prev.price);
  }
  return [];
};
