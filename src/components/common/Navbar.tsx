import { Button } from "../ui/button";
import { MoonIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center border px-20 py-4 ">
        <div>
          <p className=" text-2xl font-bold text-primary tracking-tight">
            MediConnect
          </p>
        </div>
        <div>
          <Button>login</Button>
          <Button variant="outline" size={"icon"} className="ml-4">
            <MoonIcon />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
