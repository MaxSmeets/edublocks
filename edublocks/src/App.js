import { ConnectWallet, useUser } from "@thirdweb-dev/react";

const App = () => {
  const { isLoggedIn } = useUser();
  return isLoggedIn ? <p>Testies</p> : <ConnectWallet theme='dark' />;
};

export default App;
