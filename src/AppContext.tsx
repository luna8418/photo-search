import * as React from "react";
import { PhotoStore } from "./stores";

export function createStores() {
  return { photoStore: new PhotoStore() };
}

export const stores = createStores();

export const AppContext = React.createContext(stores);
