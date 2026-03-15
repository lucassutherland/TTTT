import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { validateLoginCode } from "../lib/APIService";

export function LoginForm({
  // divProps,
  setIsLoggedIn,
}: {
  // divProps: React.ComponentProps<"div">;
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
    <div
      className={cn("flex flex-col gap-6 items-center justify-center w-full")}
    >
      <div className="bg-primary text-primary-foreground p-4">Test</div>
      <Card className="w-md">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your code below to login</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="code">Code</FieldLabel>
                <Input
                  id="code"
                  type="text"
                  required
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
                {displayError && (
                  <FieldError className="text-warning-foreground">
                    Unknown code
                  </FieldError>
                )}
              </Field>
              {/* <Field> */}
              <Button
                // type="submit"
                onClick={onSubmitCode}
                // className="outline"
                variant="default"
                className="submitButton"
              >
                Submit
              </Button>
              {/* </Field> */}
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
