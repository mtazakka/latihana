import { ThemeProvider } from "@mui/material/styles";
import { selectFuseNavbar } from "app/store/fuse/navbarSlice";
import {
  selectFuseCurrentLayoutConfig,
  selectNavbarTheme,
} from "app/store/fuse/settingsSlice";
import { memo } from "react";
import { useSelector } from "react-redux";
import NavbarToggleFab from "../../shared-components/NavbarToggleFab";
import NavbarStyle1 from "./navbar/style-1/NavbarStyle1";
import NavbarStyle2 from "./navbar/style-2/NavbarStyle2";

function NavbarWrapperLayout1(props) {
  const config = useSelector(selectFuseCurrentLayoutConfig);
  const navbar = useSelector(selectFuseNavbar);

  const navbarTheme = useSelector(selectNavbarTheme);

  return (
    <>
      <ThemeProvider theme={navbarTheme}>
        <>
          {config.navbar.style === "style-1" && <NavbarStyle1 />}
          {config.navbar.style === "style-2" && <NavbarStyle2 />}
        </>
      </ThemeProvider>

      {config.navbar.display && !config.toolbar.display && !navbar.open && (
        <NavbarToggleFab />
      )}
    </>
  );
}

export default memo(NavbarWrapperLayout1);
