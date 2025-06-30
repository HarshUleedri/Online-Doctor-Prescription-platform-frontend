import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useAuthStore } from "@/store/useAuthStore";
import useDoctorAuth from "@/hooks/useDoctorAuth";
import usePatientAuth from "@/hooks/usePatientAuth";

const Navbar = () => {
  const { isAuthenticated, user } = useAuthStore();

  const { DoctorLogoutMutate } = useDoctorAuth();
  const { logoutMutate } = usePatientAuth();

  const navigate = useNavigate();

  return (
    <header>
      <nav className="flex justify-between items-center border px-20 py-4 ">
        <div>
          <Link
            to={"/"}
            className=" text-2xl font-bold text-primary tracking-tight"
          >
            MediConnect
          </Link>
        </div>
        <div className="space-x-4">
          <Link className="font-semibold" to={"/doctors"}>
            Doctor
          </Link>
          <Link className="font-semibold" to={"/about-us"}>
            About Us
          </Link>
          <Link className="font-semibold" to={"/contact-us"}>
            Contact Us
          </Link>
        </div>

        <div className="flex gap-4">
          <div>
            {!isAuthenticated ? (
              <div className="flex items-center gap-4  ">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button className="flex gap-2 items-center">
                      <span>Login</span>
                      <div>
                        <ChevronDown />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="border p-1 rounded-md mt-2 bg-muted divide-y flex flex-col">
                    <Link to={"/doctor/signin"} className="px-2 py-1">
                      Doctor
                    </Link>
                    <Link to={"/patient/signin"} className="px-2 py-1">
                      Patient
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex gap-2">
                <Button onClick={() => navigate("/dashboard")}>
                  Dashboard
                </Button>
                {user.role === "patient" ? (
                  <Button variant={"outline"} onClick={() => logoutMutate()}>
                    logout
                  </Button>
                ) : (
                  <Button
                    variant={"outline"}
                    onClick={() => DoctorLogoutMutate()}
                  >
                    logout
                  </Button>
                )}
              </div>
            )}
          </div>
          {/* <Button variant="outline" size={"icon"} className="">
            <MoonIcon />
          </Button> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
