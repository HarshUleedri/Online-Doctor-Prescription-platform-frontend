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
import { User2 } from "lucide-react";
import { Link } from "react-router";

const DoctorSignup = () => {
  return (
    <form className="flex items-center  justify-center min-h-screen mt-12">
      <Card className="w-full lg:w-1/3">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl font-semibold "> Doctor Sign Up</h1>
            <p className=" font-normal text-sm text-muted-foreground">
              Create your doctor account to start prescribing
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <span className="font-semibold ">Profile Picture</span>
            <div className="size-32 border-2 border-dashed border-muted-foreground/50 rounded p-1 mt-2 flex items-center justify-center">
              {<User2 className="text-muted-foreground/50" />}
              {/* TODO render image conditionally  */}
              {/* <img className="w-full object-cover" src="" alt="" /> */}
            </div>
          </div>
          <Label className="flex flex-col items-start ">
            <span>Full Name</span>
            <Input placeholder="Dr. Harsh Uleedri" required />
          </Label>
          {/* specialty */}
          <Label className="flex flex-col items-start ">
            <span>Specialty</span>
            <Input placeholder="Dr. Harsh Uleedri" required />
          </Label>
          {/* Email and phone */}
          <div className="flex gap-4">
            {/* email */}
            <Label className="flex flex-col items-start w-1/2">
              <span>Email</span>
              <Input placeholder="doctor@example.com" required />
            </Label>
            {/* phone */}
            <Label className="flex flex-col items-start w-1/2 ">
              <span>Phone</span>
              <Input placeholder="+1 (555) 000-0000" required />
            </Label>
          </div>
          <Label className="flex flex-col items-start ">
            <span>Year of Experience</span>
            <Input placeholder="5.5" required />
          </Label>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full mb-4 ">Create Account</Button>
          <p className="text-sm ">
            Already Have an account ? <Link className="font-semibold" to={"/doctor/signin"}>Sign In</Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
};

export default DoctorSignup;
