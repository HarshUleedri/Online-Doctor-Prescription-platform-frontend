import DoctorCard from "@/components/common/DoctorCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAllDoctorData } from "@/hooks/useDoctorQueries";
import type { DoctorDataType } from "@/types/UserTypes";
import { Clock } from "lucide-react";

const DoctorListing = () => {
  const { data, isError, isLoading } = useAllDoctorData();

  const doctors: DoctorDataType[] = data?.doctors;
  if (isLoading)
    return (
      <div className="grid grid-col-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...new Array(6)].map(() => (
          <div>
            <Skeleton className="w-full h-32 mb-2"></Skeleton>
            <div className="space-y-2">
              <Skeleton className=" h-8" />
              <Skeleton className=" w-3/5 h-8" />
            </div>
          </div>
        ))}
      </div>
    );
  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="grid grid-col-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorListing;
