import type { DoctorDataType } from "@/types/UserTypes";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Clock } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

const DoctorCard = ({ doctor }: { doctor: DoctorDataType }) => {
  const navigate = useNavigate();
  return (
    <Card key={doctor._id}>
      <CardContent className="flex gap-4">
        <div className="size-26 rounded-full border p-1">
          <img
            className="size-full object-cover rounded-full"
            src={
              doctor.profilePic ||
              "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-260nw-1095249842.jpg"
            }
            alt={`${doctor.name}`}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{doctor.name}</h2>
          <p className="text-muted-foreground/60  font-semibold mb-2">
            {doctor.specialty}
          </p>
          <div className="flex gap-2 items-center text-primary">
            <Clock className="size-4 shrink-0" />
            <div className=" tracking-tight">
              <span>{doctor.experience}</span>
              <span className="ml-2">years experience</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => navigate(`/consult/${doctor._id}`)}
          className="w-full cursor-pointer"
          variant={"default"}
        >
          Get Consultation
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
