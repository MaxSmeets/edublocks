import React, { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import {
  MoonIcon,
  SunIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import Switch from "react-switch";
import "../../style.css";
import "../styles/NavBar.css";

function NavBar() {
  const [lightMode, setLightMode] = useState(false);
  const [switchColor, setSwitchColor] = useState("#777");
  const handleChange = () => {
    setLightMode(!lightMode);
    lightMode ? setSwitchColor("#777") : setSwitchColor("#bbb");
  };
  return (
    <div className='menuDiv'>
      <nav style={{ backgroundColor: lightMode ? "#9A48D0" : "#07004D" }}>
        <ul>
          <li>
            <h1 style={{ color: lightMode ? "#111" : "#eee" }}>EDUBLOCKS</h1>
          </li>
          <li>
            <ConnectWallet
              style={{ width: "215px" }}
              theme={lightMode ? "light" : "dark"}
              // theme={lightMode ? "dark" : "light"}
              dropDownPosition={{
                side: "right", // "top" | "bottom" | "left" | "right";
                align: "start", // "start" | "center" | "end";
              }}
            />
          </li>
          <li>
            <Switch
              offColor='#777'
              onColor='#bbb'
              uncheckedIcon={false}
              checkedIcon={false}
              uncheckedHandleIcon={
                <MoonIcon className='themeIcon' color='#555' />
              }
              checkedHandleIcon={<SunIcon className='themeIcon' color='#111' />}
              onChange={handleChange}
              checked={lightMode}
              className='themeSwitch'
            />
            <Switch
              offColor={switchColor}
              onColor={switchColor}
              uncheckedIcon={false}
              checkedIcon={false}
              uncheckedHandleIcon={<TriangleDownIcon className='themeIcon' />}
              checkedHandleIcon={<TriangleUpIcon className='themeIcon' />}
              disabled
              // onChange={}
              // checked={lightMode}
              className='themeSwitch'
            />
            <Switch
              offColor={switchColor}
              onColor={switchColor}
              uncheckedIcon={false}
              checkedIcon={false}
              uncheckedHandleIcon={<TriangleDownIcon className='themeIcon' />}
              checkedHandleIcon={<TriangleUpIcon className='themeIcon' />}
              disabled
              // onChange={}
              // checked={lightMode}
              className='themeSwitch'
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
