import { useState } from "react";
import "./App.css";
import { LoginForm } from "./components/login-form";
import { DataTable } from "./components/data-table";
import { Button } from "./components/ui/button";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <>
          <header className="flex flex-row justify-between p-4 bg-primary">
            <p className="text-2xl align-middle text-primary-foreground">
              TTTT or something
            </p>
            <div className="flex flex-row gap-6">
              <Button variant={"secondary"} className="bg-muted-foreground">
                Create new player
              </Button>
              <Button variant={"secondary"}>Register new match</Button>
            </div>
          </header>
          <div className="p-8">
            <DataTable />
          </div>
        </>
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
