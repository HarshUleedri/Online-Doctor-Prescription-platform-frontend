import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import type { ConsultationDataForDoctorType } from "@/types/type";
import { Calendar, Clock } from "lucide-react";

interface DoctorConsultationRowPropType {
  consultation: ConsultationDataForDoctorType;
  setViewConsultation: (data: boolean) => void;
  setSingleConsultationForDoctor: (data: ConsultationDataForDoctorType) => void;
}

const DoctorConsultationRow = ({
  consultation,
  setViewConsultation,
  setSingleConsultationForDoctor,
}: DoctorConsultationRowPropType) => {
  const handleViewDetails = (data: ConsultationDataForDoctorType) => {
    setViewConsultation(true);
    setSingleConsultationForDoctor(data);
  };

  const status = consultation?.status ?? "";
  return (
    <TableRow>
      {/* Patient */}
      <TableCell className="flex gap-2 items-center">
        <div className="size-8 rounded-full">
          <img
            className="size-full rounded-full"
            src={consultation.patientId.profilePic}
            alt={consultation.patientId.name}
          />
        </div>
        <div className="text-base font-medium ">
          {consultation.patientId.name}
        </div>
      </TableCell>
      {/* date */}
      <TableCell className="text-base space-x-2  ">
        <span className="flex items-center gap-2">
          <Calendar className="size-4" />
          {new Date(consultation.createdAt).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "2-digit",
          })}
        </span>
        <span className="flex items-center gap-2">
          <Clock className="size-4" />
          {new Date(consultation.createdAt).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </span>
      </TableCell>
      {/* status*/}
      <TableCell>
        <Badge
          className=""
          variant={
            consultation.status === "pending"
              ? "outline"
              : consultation.status === "completed"
              ? "default"
              : consultation.status === "cancelled"
              ? "destructive"
              : undefined
          }
        >
          {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
        </Badge>
      </TableCell>
      {/* view */}
      <TableCell>
        <Button
          onClick={() => handleViewDetails(consultation)}
          className="cursor-pointer font-normal"
          variant={"outline"}
          size={"sm"}
        >
          View More
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default DoctorConsultationRow;
