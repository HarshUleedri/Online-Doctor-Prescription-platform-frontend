import { CardContent } from "@/components/ui/card";
import { useSingleDoctorData } from "@/hooks/useDoctorQueries";
import type {
  ConsultationDataType,
  ConsultationFormErrorType,
} from "@/types/type";
import type { DoctorDataType } from "@/types/UserTypes";
import { useParams } from "react-router";
import QRCode from "react-qr-code";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";

interface Step3 {
  data: ConsultationDataType;
  handleChange: (field: Partial<ConsultationDataType>) => void;
  handleNestedChange: <T extends keyof ConsultationDataType>(
    parent: T,
    field: string,
    value: any
  ) => void;
  errors: Partial<ConsultationFormErrorType>;
}

const Step3 = ({ data, handleChange, errors }: Step3) => {
  const { id } = useParams();

  const doctorId = id || "";

  const { data: doctorInfo } = useSingleDoctorData(doctorId);

  const doctorData: DoctorDataType = doctorInfo?.doctor;

  const UPI_URL = `upi://pay?pa=${doctorData?.upiId}&pn=${encodeURIComponent(
    doctorData?.name
  )}&am=${doctorData?.consultancyAmount}&cu=INR`;

  return (
    <CardContent className="space-y-4">
      <div className="bg-accent p-12 rounded-md flex items-center justify-center ">
        <QRCode value={UPI_URL} />
      </div>
      <div>
        <Label className={`flex flex-col gap-2 items-start mb-2`}>
          <span className="text-base font-medium">Transaction Id</span>
          <Input
            placeholder="Enter transaction ID from your payment app"
            value={data.transactionId}
            onChange={(e) => handleChange({ transactionId: e.target.value })}
          />
        </Label>
        {errors.transactionId && (
          <p className="text-destructive flex items-center gap-2">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.transactionId}
          </p>
        )}
      </div>
    </CardContent>
  );
};

export default Step3;
