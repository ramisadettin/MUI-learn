import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React, { ReactNode } from "react";
import DashboardContentWrapper from "../DashboardContentWrapper";

var wrappedChildrenTestId = "child-id";
var boxComponentMockTestId = "wrapper-box-id";
var boxCorrectProps = {
  sx: {
    minWidth: "100vw",
    minHeight: "100vh",
    backgroundColor: "#fff",
  },
};

const childComponentMock = <div data-testid={wrappedChildrenTestId}></div>;
const boxMockPropsCaller = jest.fn();

jest.mock("@mui/material/Box", () => ({
  __esModule: true,
  default: ({ children, ...props }: { props: any; children: ReactNode }) => {
    boxMockPropsCaller(props);
    return <div data-testid={boxComponentMockTestId}>{children}</div>;
  },
}));
describe("@@@ DashboardContentWrapper-component-frontend-test", () => {
  describe("** Rendering tests", () => {
    test("T: it renders wrapper correctly", () => {
      render(
        <DashboardContentWrapper>{childComponentMock}</DashboardContentWrapper>
      );
      const renderedWrapper = screen.getByTestId(boxComponentMockTestId);
      expect(renderedWrapper).toBeInTheDocument();
    });
    test("T: it renders children correctly", () => {
      render(
        <DashboardContentWrapper>{childComponentMock}</DashboardContentWrapper>
      );
      const renderedChildren = screen.getByTestId(wrappedChildrenTestId);
      expect(renderedChildren).toBeInTheDocument();
    });
  });
  describe("** Correct props tests", () => {
    test("T: it renders wrapper with correct props", () => {
      render(
        <DashboardContentWrapper>{childComponentMock}</DashboardContentWrapper>
      );
      expect(boxMockPropsCaller).toHaveBeenCalledWith(boxCorrectProps);
    });
  });
});
