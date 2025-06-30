import { Card, CardContent } from "@/components/ui/card";
import { useUserConsultation } from "@/hooks/useConsultationQueries";
// import { useAuthStore } from "@/store/useAuthStore";
import type { userConsultationDataType } from "@/types/type";

const UserConsultationListing = () => {
  // const { user } = useAuthStore((state) => state);

  const { data } = useUserConsultation();

  const userConsultationData: userConsultationDataType[] = data?.consultations;

  console.log(userConsultationData);

  if (userConsultationData.length === 0) {
    return (
      <div className="text-xl font-semibold mt-12">
        You Have No Consultation
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 ">
      {userConsultationData?.map((consultation) => (
        <Card key={consultation._id}>
          <CardContent>
            <div>
              <p className="text-lg ">
                Doctor Name :
                <span className="font-bold">{consultation.doctorId.name}</span>
              </p>
              <p className="text-lg ">
                Specialty :
                <span className="font-bold">
                  {consultation.doctorId.specialty}
                </span>{" "}
              </p>
            </div>
            <div>
              <p>
                Status: <span>{consultation.status}</span>{" "}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserConsultationListing;
