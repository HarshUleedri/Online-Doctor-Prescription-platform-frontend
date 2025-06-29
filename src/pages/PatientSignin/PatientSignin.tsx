import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

const PatientLogin = () => {
  return (
    <div className="h-screen flex items-center justify-center px-4 ">
      <Card className="w-full lg:w-1/3  ">
        <CardHeader className="mb-1">
          <CardTitle>
            <h1 className="text-2xl text-primary font-semibold ">
              {" "}
              Welcome Back
            </h1>
            <p className="text-muted-foreground/60 text-sm ">
              Sign in to your account
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Label className="flex flex-col gap-1 items-start text-lg">
            Email
            <Input type="email" placeholder="example@gmail.com" />
          </Label>
          <Label className="flex flex-col gap-1 items-start text-lg">
            Password
            <Input type="password" placeholder="* * * * * *" />
          </Label>
        </CardContent>
        <CardFooter className=" flex flex-col">
          <Button className="w-full py-4 mb-4">Sign In</Button>
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link className="font-bold" to={"/patient/signup"}>
              Create one
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PatientLogin;
