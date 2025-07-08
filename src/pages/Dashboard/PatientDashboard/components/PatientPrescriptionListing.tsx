import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usePrescriptionForPatient } from "@/hooks/usePrescriptionQueries";
import PatientPrescription from "./PatientPrescriptionRow";
import type { PatientPrescriptionDataType } from "@/types/type";

const PatientPrescriptionListing = () => {
  const { data } = usePrescriptionForPatient();

  const PatientPrescriptions: PatientPrescriptionDataType[] =
    data?.prescriptions || [];
  console.log(PatientPrescriptions);

  return (
    <Table>
      <TableHeader className="border-b">
        <TableRow>
          <TableHead className="text-base">Patient</TableHead>
          <TableHead className="text-base">Date & Time</TableHead>
          <TableHead className="text-base">Download PDF</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {PatientPrescriptions.map((prescription) => (
          <PatientPrescription
            key={prescription._id}
            prescription={prescription}
          />
        ))}
      </TableBody>
    </Table>
  );
};
export default PatientPrescriptionListing;
