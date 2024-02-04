import { ReactNode } from "react";
import ThemedWrapper from "../themed-wrapper/ThemedWrapper";

const DashboardContentWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ThemedWrapper
      type="box"
      backgroundType="default"
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      {children}
    </ThemedWrapper>
  );
};
export default DashboardContentWrapper;
