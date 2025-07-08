import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { ConsultationDataForDoctorType } from "@/types/type";
import {
  Calendar,
  CalendarClock,
  ChevronLeft,
  Clipboard,
  Clock,
  FileEditIcon,
  Hash,
  HeartPulse,
  User,
} from "lucide-react";
import { useNavigate } from "react-router";

interface SingleConsultationForDoctorsPropType {
  data: ConsultationDataForDoctorType | null;
  setViewConsultation: (data: boolean) => void;
}

const SingleConsultationForDoctors = ({
  data,
  setViewConsultation,
}: SingleConsultationForDoctorsPropType) => {
  //state

  // hook
  const navigate = useNavigate();

  // value
  const status = data?.status ?? "";
  return (
    <div className="nin-h-screen space-y-6 mt-6">
      {/* back button */}
      <div className="flex items-center justify-between">
        <Button onClick={() => setViewConsultation(false)} variant={"outline"}>
          <ChevronLeft /> Back to list
        </Button>
        <div>
          <Button
            onClick={() => navigate(`prescription-form/${data?._id}`)}
            className="cursor-pointer"
          >
            <FileEditIcon />
            Give Consultation
          </Button>
        </div>
      </div>

      {/* Patient information */}
      <div className="p-4 border rounded-md flex items-center justify-between ">
        <div className="space-y-1 ">
          <div className=" flex items-center gap-4">
            <User className="text-muted-foreground/60" />
            <span className="text-xl font-semibold">
              {data?.patientId.name}
            </span>
          </div>
          {/* transaction Id */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Hash className="size-4 text-muted-foreground" />
              <span className="text-base text-muted-foreground font-medium">
                Transaction Id:
              </span>
            </div>
            {data?.transactionId}
          </div>
        </div>
        <div>
          {/* created data */}
          <div className="flex items-center gap-2">
            <Calendar className="text-muted-foreground/80 size-4" />
            <span className="text-muted-foreground/80 font-medium text-sm">
              {new Date(data?.createdAt || "").toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </span>
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
              {data?.currentIllnessHistory}
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
                {data?.familyMedicalHistory.diabetics}
              </span>
            </div>
            <div>
              <p className="text-lg font-medium">Allergies</p>
              <span className="text-base text-muted-foreground/80 font-medium">
                {data?.familyMedicalHistory.allergies || "None Reported"}
              </span>
            </div>
            <div>
              <p className="text-lg font-medium">Other Condition</p>
              <span className="text-base text-muted-foreground/80 font-medium">
                {data?.familyMedicalHistory.others || "None Reported"}
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
              data?.status === "pending"
                ? "outline"
                : data?.status === "completed"
                ? "default"
                : data?.status === "cancelled"
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
                {new Date(data?.createdAt || "").toLocaleDateString("en-US", {
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

export default SingleConsultationForDoctors;
