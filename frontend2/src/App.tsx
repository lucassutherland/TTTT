import { useState } from "react";
import "./App.css";
import { LoginForm } from "./components/login-form";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <p>home</p>
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>
      )}
    </>
  );
}

export default App;
