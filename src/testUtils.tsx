import { render,  } from "@testing-library/react";
import * as React from "react";
import { AppContext, createStores } from "./AppContext";

interface TestWrapperProps {
  children: React.ReactNode | React.ReactNodeArray;
}

export const stores = createStores();

const TestWrapper = ({ children }: TestWrapperProps) => {
  return (
    <AppContext.Provider value={stores}>{children}</AppContext.Provider>
  );
};

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: TestWrapper, ...options });

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };
