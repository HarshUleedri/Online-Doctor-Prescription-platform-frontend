import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useDoctorAuth from "@/hooks/useDoctorAuth";
import { useAuthStore } from "@/store/useAuthStore";
import type { DoctorSignUpDataType } from "@/types/UserTypes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { User2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
const specialties = [
  "Cardiologist",
  "Dermatologist",
  "Pediatrician",
  "Orthopedic Surgeon",
  "Neurologist",
  "Gynecologist",
  "ENT Specialist",
  "Psychiatrist",
  "Oncologist",
  "Dentist",
  "Urologist",
  "General Physician",
  "Gastroenterologist",
  "Ophthalmologist",
  "Pulmonologist",
];

const DoctorSignup = () => {
  //state
  const [formData, setFormData] = useState<DoctorSignUpDataType>({
    name: "",
    profilePic: "",
    specialty: "",
    email: "",
    phone: "",
    password: "",
    experience: undefined,
  });

  // hook
  const {
    uploadMutate,
    uploadIsPending,
    uploadIsError,
    DoctorSignupMutate,
    DoctorSignupError,
    DoctorSignupIsPending,
  } = useDoctorAuth();

  const { isError, isLoading } = useAuthStore((state) => state);

  //helper function

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    DoctorSignupMutate(formData);
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      try {
        const data = await uploadMutate(formData);
        setFormData((prev) => ({ ...prev, profilePic: data?.url }));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center  justify-center min-h-screen mt-12"
    >
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
                  alt=""
                />
              ) : uploadIsPending ? (
                <div className="size-8 rounded-full border-4 border-muted-foreground/50 border-t-primary animate-spin bg-transparent"></div>
              ) : (
                <div className="size-20 rounded-md hover:bg-accent flex items-center justify-center">
                  <User2 className="text-muted-foreground/50 " />
                </div>
              )}
              {uploadIsError && (
                <p className="text-destructive text-sm">Something went Wrong</p>
              )}
            </Label>
          </div>
          <Label className="flex flex-col items-start ">
            <span>Full Name</span>
            <Input
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              placeholder="Dr. Harsh Uleedri"
              required
            />
          </Label>
          {/* specialty */}
          <Label className="flex flex-col items-start ">
            <span>Specialty</span>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full ">
                <Input
                  className="text-start "
                  type="button"
                  value={formData.specialty || "Select specialty"}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" h-44" align="start">
                {specialties.map((specialty, idx) => (
                  <DropdownMenuItem
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, specialty: specialty }))
                    }
                    key={idx}
                  >
                    {specialty}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </Label>
          {/* Email and phone */}
          <div className="flex gap-4">
            {/* email */}
            <Label className="flex flex-col items-start w-1/2">
              <span>Email</span>
              <Input
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                placeholder="doctor@example.com"
                required
              />
            </Label>
            {/* phone */}
            <Label className="flex flex-col items-start w-1/2 ">
              <span>Phone</span>
              <Input
                type="number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                placeholder="+1 (555) 000-0000"
                required
              />
            </Label>
          </div>
          <Label className="flex flex-col items-start">
            <span>Password</span>
            <Input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              placeholder="* * * * * *"
              required
            />
          </Label>
          <Label className="flex flex-col items-start ">
            <span>Year of Experience</span>
            <Input
              type="number"
              value={formData.experience}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  experience: Number(e.target.value),
                }))
              }
              placeholder="5.5"
              required
            />
          </Label>
          {(DoctorSignupError || isError) && (
            <p className="text-sm text-destructive font-medium">
              {typeof DoctorSignupError === "object" &&
              DoctorSignupError !== null &&
              "response" in DoctorSignupError
                ? // @ts-expect-error: DoctorSignupError may not have a response property, but we want to access it if present
                  DoctorSignupError.response?.data?.message
                : DoctorSignupError?.message || isError}
            </p>
          )}
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button
            disabled={DoctorSignupIsPending || isLoading}
            className="w-full mb-4 "
          >
            {DoctorSignupIsPending || isLoading ? (
              <div className="size-6 rounded-full border-3 border-muted-foreground/50 border-t-primary animate-spin bg-transparent"></div>
            ) : (
              "Create Account"
            )}
          </Button>
          <p className="text-sm ">
            Already Have an account ?{" "}
            <Link className="font-semibold" to={"/doctor/signin"}>
              Sign In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
};

export default DoctorSignup;
