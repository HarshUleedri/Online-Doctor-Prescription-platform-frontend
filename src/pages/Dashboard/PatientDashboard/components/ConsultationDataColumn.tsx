import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import type { userConsultationDataType } from "@/types/type";

interface ConsultationDataColumnPropType {
  consultation: userConsultationDataType;
  setSingleConsultationData: (data: userConsultationDataType) => void;
  setViewConsultation: (data: boolean) => void;
}

const ConsultationDataColumn = ({
  consultation,
  setSingleConsultationData,
  setViewConsultation,
}: ConsultationDataColumnPropType) => {
  //value
  const status = consultation?.status ?? "";

  //helper function
  const handleSetData = (data: userConsultationDataType) => {
    setSingleConsultationData(data);
    setViewConsultation(true);
  };

  return (
    <TableRow>
      {/* doctors */}
      <TableCell className="flex gap-2 items-center">
        <div className="size-8 rounded-full">
          <img
            className="size-full rounded-full"
            src={consultation.doctorId.profilePic}
            alt={consultation.doctorId.name}
          />
        </div>
        <div className="text-base font-medium ">
          {consultation.doctorId.name}
        </div>
      </TableCell>
      {/* date */}
      <TableCell className="text-base">
        {new Date(consultation.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
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
          onClick={() => handleSetData(consultation)}
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

export default ConsultationDataColumn;
