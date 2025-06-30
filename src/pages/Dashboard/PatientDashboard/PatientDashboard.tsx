import { useAuthStore } from "@/store/useAuthStore";
import { Brain, ClipboardPlus, FileClock, Hospital } from "lucide-react";
import { useState } from "react";
import UserConsultationListing from "./components/UserConsultationListing.";
import ComingSoon from "./components/ComingSoon";
const navtab = [
  { number: 1, title: "Consultation", icon: Brain },
  { number: 2, title: "Prescription", icon: ClipboardPlus },
  { number: 3, title: "History", icon: FileClock },
  { number: 4, title: "Analytics", icon: Hospital },
];

const PatientDashboard = () => {
  const { user } = useAuthStore((state) => state);

  const [isActive, setIsActive] = useState<number>(1);

  return (
    <div className="min-h-screen flex">
      <div className="w-72  space-y-4 hidden lg:block px-4 py-8 border-r-1">
        {navtab.map((item) => (
          <div
            onClick={() => setIsActive(item.number)}
            key={item.number}
            className={`flex items-center gap-4 py-2 hover:bg-muted rounded-md px-4 group ${
              isActive === item.number && "bg-primary text-muted"
            }`}
          >
            <span className="  ">
              <item.icon className="size-5" />
            </span>
            <span className="text-base font-medium group-hover:text-primary ">
              {item.title}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full p-8  ">
        <h1 className="text-2xl font-semibold mb-2">Hii {user.name}</h1>
        <hr />

        {isActive === 1 && <UserConsultationListing />}
        {isActive === 2 && <ComingSoon />}
        {isActive === 3 && <ComingSoon />}
        {isActive === 4 && <ComingSoon />}
      </div>
    </div>
  );
};

export default PatientDashboard;
