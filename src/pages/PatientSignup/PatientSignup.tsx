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
import { Textarea } from "@/components/ui/textarea";
import usePatientAuth from "@/hooks/usePatientAuth";
import { useAuthStore } from "@/store/useAuthStore";
import type { PatientSignUpDataType } from "@/types/UserTypes";
import { User2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const PatientSignup = () => {
  const [formData, setFormData] = useState<PatientSignUpDataType>({
    name: "",
    profilePic: "",
    age: undefined,
    email: "",
    phone: "",
    password: "",
    historyOfSurgery: [],
    historyOfIllness: [],
  });

  // hook
  const {
    uploadMutate,
    uploadIsPending,
    signupMutate,
    signupIsPending,
    signupError,
  } = usePatientAuth();
  const { isLoading, isError } = useAuthStore((state) => state);

  //helper function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signupMutate(formData);
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      const data = await uploadMutate(formData);
      setFormData((prev) => ({ ...prev, profilePic: data.url }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center  justify-center min-h-screen my-16"
    >
      <Card className="w-full lg:w-1/3">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl font-semibold ">Create A User Account</h1>
            <p className=" font-normal text-sm text-muted-foreground">
              Get Your Consultancy Fast
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* image upload */}
          <div>
            <span className="font-semibold ">Profile Picture</span>
            <Label
              id="upload"
              className=" size-32 border-2 border-dashed border-muted-foreground/50 rounded p-1 mt-2 flex items-center justify-center"
            >
              <input
                id="upload"
                onChange={(e) => handleUpload(e)}
                type="file"
                className="hidden"
              />
              {formData.profilePic ? (
                <img
                  className="w-full h-full object-cover"
                  src={formData.profilePic}
                  alt="profile-image"
                />
              ) : uploadIsPending ? (
                <div className="size-8 rounded-full border-4 border-muted-foreground/50 border-t-primary animate-spin bg-transparent"></div>
              ) : (
                <div className="size-20 rounded-md hover:bg-accent flex items-center justify-center">
                  <User2 className="text-muted-foreground/50 " />
                </div>
              )}
            </Label>
          </div>
          {/* fulll name */}
          <Label className="flex flex-col items-start ">
            <span className=" font-semibold text-sm mb-1">Full Name</span>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Enter your full name"
              required
            />
          </Label>
          {/* Age */}
          <Label className="flex flex-col items-start ">
            <span className=" font-semibold text-sm mb-1">Age</span>
            <Input
              type="number"
              value={formData.age}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  age: Number(e.target.value),
                }))
              }
              placeholder="Enter your age"
              required
            />
          </Label>
          {/* Email and phone */}
          <div className="flex gap-4">
            {/* email */}
            <Label className="flex flex-col items-start w-1/2">
              <span className=" font-semibold text-sm mb-1">Email</span>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="doctor@example.com"
                required
              />
            </Label>
            {/* phone */}
            <Label className="flex flex-col items-start w-1/2 ">
              <span className=" font-semibold text-sm mb-1">Phone</span>
              <Input
                type="number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                placeholder="+1 (555) 000-0000"
                required
              />
            </Label>
          </div>

          <Label className="flex flex-col items-start ">
            <span className=" font-semibold text-sm mb-1">Password</span>
            <Input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder="* * * * * *"
              required
            />
          </Label>
          <Label className="flex flex-col items-start ">
            <span className=" font-semibold text-sm mb-1">Surgery History</span>
            <Textarea
              value={formData.historyOfSurgery}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  historyOfSurgery: e.target.value.split(","),
                }))
              }
              placeholder="List your previous surgeries separated by commas"
              required
            />
          </Label>
          <Label className="flex flex-col items-start ">
            <span className=" font-semibold text-sm mb-1">
              History of Illness
            </span>
            <Textarea
              value={formData.historyOfIllness}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  historyOfIllness: e.target.value.split(","),
                }))
              }
              placeholder="Enter illnesses separated by commas"
              required
            />
          </Label>
          {(signupError || isError) && (
            <p className="text-sm text-destructive font-medium">
              {signupError?.response.data.message || isError}
            </p>
          )}
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button
            disabled={signupIsPending || isLoading}
            className="w-full mb-4 "
          >
            {signupIsPending || isLoading ? (
              <div className="size-6 rounded-full border-3 border-muted-foreground/50 border-t-primary animate-spin bg-transparent"></div>
            ) : (
              "Create Account"
            )}
          </Button>
          <p className="text-sm ">
            Already Have an account ?{" "}
            <Link className="font-semibold" to={"/patient/signin"}>
              Sign In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
};

export default PatientSignup;
