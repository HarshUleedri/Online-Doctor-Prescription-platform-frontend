import { Button } from "@/components/ui/button";

import { Search, Stethoscope } from "lucide-react";

const Home = () => {
  return (
    <div className="mx-auto container px-4 lg:px-20  py-8 min-h-screen">
      <section className="flex items-center gap-8 ">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold  mb-4">Healthcare Made Simple</h1>
          <p className="text-lg w-11/12  mb-12">
            Connect with qualified healthcare professionals and manage your
            health journey with ease. Book appointments, consult online, and
            access your medical records all in one place.
          </p>
          <div className=" flex gap-4 items-center">
            <Button>
              <Search /> Get Started
            </Button>
            <Button variant={"outline"}>
              <Stethoscope /> Join as Doctor
            </Button>
          </div>

          {/* more details */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div className="flex justify-center items-center flex-col">
              <Users />
              <div className="text-center">
                <p className="text-2xl font-bold mt-1">1000+ </p>
                <p className="text-xs text-muted-foreground/80">
                  Registered Patients
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <Users />
              <div className="text-center">
                <p className="text-xl font-bold mt-1">1000+ </p>
                <p className="text-xs text-muted-foreground/80">
                  Registered Patients
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <Users />
              <div className="text-center">
                <p className="text-xl font-bold mt-1">1000+ </p>
                <p className="text-xs text-muted-foreground/80">
                  Registered Patients
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="w-full lg:w-1/2 ">
          <img
            src="https://images.unsplash.com/photo-1622475441028-8927e3772656?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Healthcare Illustration"
            className="  rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
