import { useState } from "react";
import { validateLoginCode } from "./service";
import "./Login.css";

export function Login({
  setIsLoggedIn,
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [code, setCode] = useState("");
  const [displayError, setDisplayError] = useState(false);

  const onSubmitCode = () => {
    const success = validateLoginCode(code);
    if (success) {
      setDisplayError(false);
      setIsLoggedIn(true);
    } else {
      setDisplayError(true);
    }
  };

  return (
    <div className="login-background">
      <div className="login-modal">
        <h1>Enter token</h1>
        <input
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        ></input>
        {displayError && <p className="error-text">Invalid code</p>}
        <button onClick={onSubmitCode}>Submit</button>
      </div>
    </div>
  );
}
