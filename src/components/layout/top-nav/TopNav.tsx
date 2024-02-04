import Box from "@mui/material/Box"; // Grid version 2
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Image from "next/image";
import StyledBadge from "@/components/custom/styled-badge/StyledBadge";
import ThemedWrapper from "../themed-wrapper/ThemedWrapper";

const TopNav = () => {
  return (
    <ThemedWrapper
      type="box"
      backgroundType="paper"
      sx={{
        width: {
          sx: "100%",
          sm: "90%",
        },
      }}
      py={1.5}
      px={2}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"auto"}
      component={"nav"}
    >
      <Box alignItems={"center"} gap={2} display={"flex"}>
        <MenuOutlinedIcon />
        <SearchOutlinedIcon />
      </Box>
      <Box alignItems={"center"} gap={2} display={"flex"}>
        <TranslateOutlinedIcon />
        <DarkModeOutlinedIcon />
        <WidgetsOutlinedIcon />
        <NotificationsOutlinedIcon />
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          sx={{ width: "35px", height: "35px" }}
        >
          <Image
            src="/images/avatar.png"
            width={40}
            height={40}
            alt="avatar-test"
            style={{ borderRadius: "50%" }}
          />
        </StyledBadge>
      </Box>
    </ThemedWrapper>
  );
};
export default TopNav;
