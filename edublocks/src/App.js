import "./style.css";
import NavBar from "./components/logic/NavBar";
import { useUser } from "@thirdweb-dev/react";
import Home from "./components/logic/Home";

const App = () => {
  const { user, isLoggedIn, isLoading } = useUser();
  return isLoggedIn ? (
    <p>Testies</p>
  ) : (
    <div id='mainDiv'>
      <NavBar />
      <div style={{ paddingLeft: "20px", marginLeft: "230px" }}>
        <Home />
      </div>
    </div>
  );
};

export default App;
