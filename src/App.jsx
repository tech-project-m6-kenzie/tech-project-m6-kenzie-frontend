import { useContext, useEffect } from "react";
import "../src/style/App.css";
import { AuthContext, AuthProvider } from "./context/AuthContext";

import Home from "./pages/home";
import { DashBoard } from "./pages/dashboard";

function App() {
  const { isLogin,toastMessage, setToastMessage, loginError } = useContext(AuthContext);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 5000);  
  
       
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="App">
      {toastMessage && <div className="toast">{toastMessage}</div>}
      {loginError && <p className="apiError">{loginError}</p>}
      {isLogin ? <DashBoard /> : <Home />}
    </div>
  );
}

export default App;
