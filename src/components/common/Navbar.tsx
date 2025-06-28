import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown, MoonIcon } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center border px-20 py-4 ">
        <div>
          <p className=" text-2xl font-bold text-primary tracking-tight">
            MediConnect
          </p>
        </div>
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

          <Button variant="outline" size={"icon"} className="">
            <MoonIcon />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
