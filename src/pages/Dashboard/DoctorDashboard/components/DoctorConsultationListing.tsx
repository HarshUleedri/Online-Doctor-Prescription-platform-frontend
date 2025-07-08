import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import { useDoctorConsultation } from "@/hooks/useConsultationQueries";
import DoctorConsultationRow from "./DoctorConsultationRow";
import type { ConsultationDataForDoctorType } from "@/types/type";
import { useState } from "react";
import SingleConsultationForDoctors from "./SingleConsultationForDoctors";

const DoctorConsultationListing = () => {
  //state
  const [viewConsultation, setViewConsultation] = useState<boolean>(false);
  const [singleConsultationForDoctor, setSingleConsultationForDoctor] =
    useState<ConsultationDataForDoctorType | null>(null);

  //hook
  const { data } = useDoctorConsultation();

  const doctorConsultationData: ConsultationDataForDoctorType[] =
    data?.consultations || [];

  //helper function
  if (doctorConsultationData.length <= 0) {
    return (
      <div className="text-center text-xl font-medium mt-12">
        {" "}
        No Patients Yet
      </div>
    );
  }

  return (
    <div>
      {viewConsultation ? (
        <SingleConsultationForDoctors
          setViewConsultation={setViewConsultation}
          data={singleConsultationForDoctor}
        />
      ) : (
        <Table>
          <TableHeader className="border-b">
            <TableHead className="text-base">Patient</TableHead>
            <TableHead className="text-base">Date & Time</TableHead>
            <TableHead className="text-base">Status</TableHead>
            <TableHead className="text-base">View Detail</TableHead>
          </TableHeader>
          <TableBody>
            {doctorConsultationData.map((consultation) => (
              <DoctorConsultationRow
                consultation={consultation}
                setViewConsultation={setViewConsultation}
                setSingleConsultationForDoctor={setSingleConsultationForDoctor}
              />
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default DoctorConsultationListing;
