import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import { usePrescriptionForDoctor } from "@/hooks/usePrescriptionQueries";
import DoctorPrescription from "./DoctorPrescriptionRow";
import type { DoctorPrescriptionDataType } from "@/types/type";

const PrescriptionListing = () => {
  const { data } = usePrescriptionForDoctor();

  const DoctorPrescriptions: DoctorPrescriptionDataType[] =
    data?.prescriptions || [];

  if (DoctorPrescriptions.length <= 0) {
    return (
      <div className="text-center text-xl font-medium mt-12">
        No Prescription Yet
      </div>
    );
  }

  return (
    <Table>
      <TableHeader className="border-b">
        <TableHead className="text-base">Patient</TableHead>
        <TableHead className="text-base">Date & Time</TableHead>
        <TableHead className="text-base">Download PDF</TableHead>
      </TableHeader>
      <TableBody>
        {DoctorPrescriptions.map((prescription) => (
          <DoctorPrescription
            key={prescription._id}
            prescription={prescription}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default PrescriptionListing;
