import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { userConsultationDataType } from "@/types/type";
import {
  Calendar,
  CalendarClock,
  ChevronLeft,
  Clipboard,
  ClipboardCheck,
  Clock,
  HeartPulse,
  Stethoscope,
  User,
} from "lucide-react";

interface SIngleConsultationPropType {
  singleConsultationData: userConsultationDataType | null;
  setViewConsultation: (data: boolean) => void;
}

const SingleConsultationData = ({
  singleConsultationData,
  setViewConsultation,
}: SIngleConsultationPropType) => {
  //value
  const status = singleConsultationData?.status ?? "";
  return (
    <div className="nin-h-screen space-y-6 mt-6">
      {/* back button */}
      <Button onClick={() => setViewConsultation(false)} variant={"outline"}>
        <ChevronLeft /> Back to list
      </Button>
      {/* doctor information */}
      <div className="p-4 border rounded-md flex items-center justify-between ">
        <div className="space-y-1 ">
          <div className=" flex items-center gap-4">
            <User className="text-muted-foreground/60" />
            <span className="text-xl font-semibold">
              {singleConsultationData?.doctorId.name}
            </span>
          </div>
          <div className=" flex items-center gap-4">
            <Stethoscope className="text-muted-foreground/60 size-5" />
            <span className="text-base font-semibold text-muted-foreground/80">
              {singleConsultationData?.doctorId.specialty}
            </span>
          </div>
        </div>
        <div>
          {/* created data */}
          <div className="flex items-center gap-2">
            <Calendar className="text-muted-foreground/80 size-4" />
            <span className="text-muted-foreground/80 font-medium text-sm">
              {new Date(
                singleConsultationData?.createdAt || ""
              ).toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </span>
          </div>
          {/* transaction ID */}
          <div className="flex items-center gap-1">
            <ClipboardCheck className="text-muted-foreground/80 size-4" />
            <p className="text-muted-foreground/80 font-medium text-sm">
              Transaction ID :
              <span className="ml-2">
                {singleConsultationData?.transactionId}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* patient detail */}
      <div className="flex items-stretch gap-6 ">
        {/* current illness */}
        <div className="p-4 border rounded-md w-1/2 ">
          <div className="flex items-center gap-4 mb-4">
            <HeartPulse className="text-destructive" />
            <span className="text-xl font-semibold">
              Current Illness History
            </span>
          </div>
          <div>
            <p className="text-base break-words">
              {singleConsultationData?.currentIllnessHistory}
            </p>
          </div>
        </div>
        {/* family medical history */}
        <div className="p-4 border rounded-md w-1/2 h-full ">
          <div className="flex items-center gap-4 mb-6">
            <Clipboard />
            <span className="text-xl font-semibold">
              Family Medical History
            </span>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-lg font-medium">Diabetic Status</p>
              <span className="text-base text-muted-foreground/80 font-medium">
                {singleConsultationData?.familyMedicalHistory.diabetics}
              </span>
            </div>
            <div>
              <p className="text-lg font-medium">Allergies</p>
              <span className="text-base text-muted-foreground/80 font-medium">
                {singleConsultationData?.familyMedicalHistory.allergies ||
                  "None Reported"}
              </span>
            </div>
            <div>
              <p className="text-lg font-medium">Other Condition</p>
              <span className="text-base text-muted-foreground/80 font-medium">
                {singleConsultationData?.familyMedicalHistory.others ||
                  "None Reported"}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Timeline of the consultation */}
      <div className="p-4 border rounded-md  ">
        <div className="flex items-center gap-4 mb-4">
          <CalendarClock />
          <span className="text-xl font-semibold">Record Timeline</span>
        </div>
        <div className="flex items-center justify-between">
          <Badge
            className="text-sm px-4"
            variant={
              singleConsultationData?.status === "pending"
                ? "outline"
                : singleConsultationData?.status === "completed"
                ? "default"
                : singleConsultationData?.status === "cancelled"
                ? "destructive"
                : undefined
            }
          >
            <p className="first-letter:capitalize">
              Current status:{" "}
              <span>
                {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
              </span>
            </p>
          </Badge>
          <div className="flex items-center gap-2">
            <Clock className="text-muted-foreground/80 size-4" />
            <p className="text-muted-foreground/80 font-medium text-sm">
              {" "}
              Created At:{" "}
              <span className="text-muted-foreground/80 font-medium text-sm">
                {new Date(
                  singleConsultationData?.createdAt || ""
                ).toLocaleDateString("en-US", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                })}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleConsultationData;
