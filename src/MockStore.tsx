import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "./store.ts";

const MockStore: React.FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default MockStore;
