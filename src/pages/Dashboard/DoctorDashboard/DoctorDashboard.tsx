import { useAuthStore } from "@/store/useAuthStore";
import { FileClock, FilePenLineIcon, Hospital, Users } from "lucide-react";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";

const navTab = [
  { number: 1, title: "Patients", icon: Users },
  { number: 2, title: "Prescriptions", icon: FilePenLineIcon },
  { number: 3, title: "History", icon: FileClock },
  { number: 4, title: "Analytics", icon: Hospital },
];
const DoctorDashboard = () => {
  //state
  const [isActive, setIsActive] = useState<number>(1);

  //hook

  const navigate = useNavigate();
  const { user, isLoading } = useAuthStore((state) => state);
  if (isLoading) return <>Loading</>;

  return (
    <div>
      <header>
        <nav className="px-6 py-2 border-b flex justify-between items-center">
          <div>
            <Link
              to={"/"}
              className="  text-2xl font-bold text-primary tracking-tight"
            >
              MediConnect
            </Link>
          </div>
          <div>
            {/* user */}
            <div className="flex items-center gap-2">
              <div className="size-12 rounded-full p-1 border">
                <img
                  className="size-full rounded-full"
                  src={
                    user?.profilePic ||
                    "https://placehold.co/100x100?text=image"
                  }
                  alt="profile-image"
                />
              </div>
              <p className="text-lg font-medium">{user.name}</p>
            </div>
          </div>
        </nav>
      </header>
      <div className="flex ">
        <aside className="w-72 min-h-screen  space-y-4 hidden lg:block px-6 py-6 border-r-1">
          {navTab.map((item) => (
            <div
              onClick={() => {
                navigate(`${item.title.trim().toLowerCase()}`);
                setIsActive(item.number);
              }}
              key={item.number}
              className={`flex items-center gap-2 py-2 hover:bg-muted rounded-md px-4 group ${
                isActive === item.number && "text-accent   bg-accent-foreground"
              } `}
            >
              <span className="group-hover:text-primary  ">
                <item.icon className="size-5" />
              </span>
              <span className="text-base font-medium  group-hover:text-primary">
                {item.title}
              </span>
            </div>
          ))}
        </aside>
        <main className="p-6 w-full">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">
              Welcome Back, {user.name}
            </h2>
            <p className="text-base font-medium text-muted-foreground/80">
              Here's your practice overview
            </p>
          </div>

          {/* pages */}
          <Outlet />
          {/* {isActive === 1 && <DoctorConsultationListing />}
          {isActive === 2 && <ComingSoon />}
          {isActive === 3 && <ComingSoon />}
          {isActive === 4 && <ComingSoon />}
          {page[page.length - 1] === "prescription" && (
            <DoctorPrescriptionForm />
          )} */}
          {/* {page[page.length - 1] === "patients" && <DoctorPrescriptionForm />} */}
        </main>
      </div>
    </div>
  );
};

export default DoctorDashboard;
