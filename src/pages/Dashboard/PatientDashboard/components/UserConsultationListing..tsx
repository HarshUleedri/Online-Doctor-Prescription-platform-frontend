import { useUserConsultation } from "@/hooks/useConsultationQueries";
// import { useAuthStore } from "@/store/useAuthStore";
import type { userConsultationDataType } from "@/types/type";
import ConsultationDataColumn from "./ConsultationDataColumn";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
} from "@/components/ui/table";

import { useState } from "react";
import SingleConsultationData from "./SingleConsultationData";

// -----------------------

const UserConsultationListing = () => {
  const [viewConsultation, setViewConsultation] = useState<boolean>(false);
  const [singleConsultationData, setSingleConsultationData] =
    useState<userConsultationDataType | null>(null);

  //hooks
  const { data } = useUserConsultation();

  //value
  const userConsultationData: userConsultationDataType[] = data?.consultations;

  //condition rendering

  if (userConsultationData?.length === 0) {
    return (
      <div className="text-xl font-semibold mt-12">
        You Have No Consultation
      </div>
    );
  }

  return (
    <div>
      {viewConsultation ? (
        <SingleConsultationData
          singleConsultationData={singleConsultationData}
          setViewConsultation={setViewConsultation}
        />
      ) : (
        <div className=" mt-4 ">
          <Table>
            <TableHeader className="border-b">
              <TableHead className="text-base">Doctor</TableHead>
              <TableHead className="text-base">Date</TableHead>
              <TableHead className="text-base">Status</TableHead>
              <TableHead className="text-base">View Detail</TableHead>
            </TableHeader>
            <TableBody>
              {userConsultationData?.map((consultation) => (
                <ConsultationDataColumn
                  key={consultation._id}
                  setViewConsultation={setViewConsultation}
                  setSingleConsultationData={setSingleConsultationData}
                  consultation={consultation}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default UserConsultationListing;
