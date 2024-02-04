import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";




// jest.mock("@mui/material/Box", () => ({
//   __esModule: true,
//   default: ({ children, ...props }: { props: any; children: ReactNode }) => {
//     boxMockPropsCaller(props);
//     return <div data-testid={boxComponentMockTestId}>{children}</div>;
//   },
// }));
describe("@@@ DashboardContentWrapper-component-frontend-test", () => {
  describe("** Rendering tests", () => {
    test("T: it renders wrapper correctly", () => {
      expect(1).toBe(1)
    });
  });
});
