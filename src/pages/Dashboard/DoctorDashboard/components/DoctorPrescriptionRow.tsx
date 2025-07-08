import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import type { DoctorPrescriptionDataType } from "@/types/type";
import { Calendar, Clock, Download, Eye } from "lucide-react";

export interface DoctorPrescription {
  prescription: DoctorPrescriptionDataType;
}

const DoctorPrescription = ({ prescription }: DoctorPrescription) => {
  //helper function
  const handleDownload = async () => {
    try {
      const response = await fetch(prescription.pdfUrl, { mode: "cors" });
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${prescription.patientId.name}-prescription.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <TableRow>
      {/* Patient */}
      <TableCell className="flex gap-2 items-center">
        <div className="size-8 rounded-full">
          <img
            className="size-full rounded-full"
            src={prescription.patientId.profilePic}
            alt={prescription.patientId.name}
          />
        </div>
        <div className="text-base font-medium ">
          {prescription.patientId.name}
        </div>
      </TableCell>
      {/* date */}
      <TableCell className="text-base">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <Calendar className="size-4" />
            {new Date(prescription.createdAt).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "2-digit",
            })}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="size-4" />
            {new Date(prescription.createdAt).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
        </div>
      </TableCell>
      {/* download button */}
      <TableCell className="text-base   ">
        <div className="flex items-center gap-4">
          <Button onClick={handleDownload} variant={"ghost"}>
            <Download className="size-5" />
          </Button>

          <a
            href={prescription.pdfUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Eye className=" p-1 rounded border size-7" />
          </a>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default DoctorPrescription;
