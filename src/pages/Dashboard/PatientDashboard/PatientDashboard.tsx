import { useAuthStore } from "@/store/useAuthStore";
import { Brain, ClipboardPlus, FileClock, Hospital } from "lucide-react";
import { useState } from "react";
import UserConsultationListing from "./components/UserConsultationListing.";
import ComingSoon from "./components/ComingSoon";
import { Link } from "react-router";
import PatientPrescriptionListing from "./components/PatientPrescriptionListing";
const navTab = [
  { number: 1, title: "Consultation", icon: Brain },
  { number: 2, title: "Prescription", icon: ClipboardPlus },
  { number: 3, title: "History", icon: FileClock },
  { number: 4, title: "Analytics", icon: Hospital },
];

const PatientDashboard = () => {
  // state
  const [isActive, setIsActive] = useState<number>(1);

  //hooks
  const { user } = useAuthStore((state) => state);

  return (
    <div className="min-h-screen  ">
      <header className="px-6 py-2 border-b flex justify-between items-center">
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
                  "https://ik.imagekit.io/harshdev/Doctor/ProfileImage/beachhousefullmoonscenerydigitalart6542bthumbjpg_UI0Idb9Ru.png"
                }
                alt=""
              />
            </div>
            <p className="text-lg font-medium">{user.name}</p>
          </div>
        </div>
      </header>
      <div className="flex">
        {/* side bar */}
        <aside className="w-72 min-h-screen  space-y-4 hidden lg:block px-6 py-6 border-r-1">
          {navTab.map((item) => (
            <div
              onClick={() => setIsActive(item.number)}
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
        <main className="w-full p-6  ">
          <h2 className="text-2xl font-semibold mb-6">
            Welcome Back, {user.name}
          </h2>

          {isActive === 1 && <UserConsultationListing />}
          {isActive === 2 && <PatientPrescriptionListing />}
          {isActive === 3 && <ComingSoon />}
          {isActive === 4 && <ComingSoon />}
        </main>
      </div>
    </div>
  );
};

export default PatientDashboard;
