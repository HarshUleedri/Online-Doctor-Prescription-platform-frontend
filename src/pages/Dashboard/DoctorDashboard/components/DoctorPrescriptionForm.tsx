import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  useGeneratePdf,
  useSingleConsultation,
} from "@/hooks/useConsultationQueries";
import { useCreatePrescription } from "@/hooks/usePrescriptionQueries";
import type { SingleConsultationType } from "@/types/type";
import { CheckCircle, FileText, Send } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

export interface CreatePrescriptionDataType {
  consultationId: string;
  pdfUrl: string;
  patientId: string;
  careToBeTaken: string;
  medicines: string;
}

const DoctorPrescriptionForm = () => {
  //state
  const [formData, setFormData] = useState({
    careToBeTaken: "",
    medicines: "",
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  //hooks
  const { id } = useParams();

  const consultationId = id || "";
  const { data } = useSingleConsultation(consultationId);

  const consultationData: SingleConsultationType = data?.consultation || {};

  //hooks
  const {
    data: pdfUrl,
    isPending: pdfUrlIsPending,
    isError: pdfUrlError,
    mutate: pdfMutate,
  } = useGeneratePdf();

  const navigate = useNavigate();

  const { mutateAsync, isPending } = useCreatePrescription();

  //helper function
  const handleSubmit = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("working");
    const data: CreatePrescriptionDataType = {
      consultationId: consultationData?._id,
      pdfUrl: pdfUrl?.pdfUrl,
      patientId: consultationData?.patientId._id,
      careToBeTaken: formData?.careToBeTaken,
      medicines: formData?.medicines,
    };

    if (
      !data.careToBeTaken ||
      !data.consultationId ||
      !data.medicines ||
      !data.patientId ||
      !data.pdfUrl
    ) {
      return;
    }

    const res = await mutateAsync(data);

    const { success } = res || {};
    if (success) {
      setIsSubmitted(true);
    } else {
      setError("Something Went Wrong");
    }
  };

  const handlePdfGenerate = () => {
    const data = {
      consultationId: consultationData._id,
      careToBeTaken: formData.careToBeTaken,
      medicines: formData.medicines,
    };
    console.log(data);
    if (!data.consultationId || !data.careToBeTaken || !data.medicines) {
      return;
    }
    pdfMutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="h-[70vh] flex items-center justify-center">
        <div className=" border max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg ">
          <div className="text-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Form Submitted Successfully!
            </h2>
          </div>
          <Button
            className=" w-full "
            onClick={() => {
              navigate("/dashboard/patients", { replace: true });
              setIsSubmitted(false);
            }}
            variant={"outline"}
          >
            Go to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-medium ">Write Prescription</h2>
          <p className="text-base font-medium text-muted-foreground/80">
            Provide care advice and recommended medicines for
            {consultationData.patientId?.name}
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-4 ">
            <Label className="flex gap-2 flex-col items-start w-full ">
              <span className="text-base">Patient Name</span>
              <Input
                className="text-base"
                value={consultationData.patientId?.name}
              />
            </Label>
            <Label className="flex gap-2 flex-col items-start w-full">
              <span className="text-base">Patient Age</span>
              <Input
                className="text-base"
                value={consultationData.patientId?.age}
              />
            </Label>
          </div>
          <Label className="flex gap-2 flex-col items-start">
            <span className="text-base">Consultation Date :</span>
            <Input
              className="text-base"
              value={new Date(consultationData.createdAt).toLocaleDateString(
                "en-US",
                {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }
              )}
            />
          </Label>
          <Label className="flex gap-2 flex-col items-start">
            <span className="text-base">
              Care to be taken <span className="text-destructive">*</span>
            </span>
            <Textarea
              value={formData.careToBeTaken}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  careToBeTaken: e.target.value,
                }))
              }
              className="text-base h-24"
              placeholder="Enter care instructions..."
            />
          </Label>
          <Label className="flex gap-2 flex-col items-start">
            <span className="text-base">
              Medicine <span className="text-destructive">*</span>
            </span>
            <Textarea
              value={formData.medicines}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  medicines: e.target.value,
                }))
              }
              className="text-base h-24"
              placeholder="Enter care instructions..."
            />
          </Label>
          {pdfUrl && (
            <div>
              <span className="text-base font-medium ">Generated PDF</span>
              <div className="flex gap-4 items-center mt-4">
                <iframe
                  className="size-72 rounded-md shadow border p-1"
                  src={pdfUrl.pdfUrl}
                ></iframe>
                <a
                  href={pdfUrl.pdfUrl}
                  className="px-4 py-2 rounded-md  border "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View PDF Preview
                </a>
              </div>
            </div>
          )}
          {error && <p className="text-destructive ">{error}</p>}
          <div className="flex justify-end">
            {pdfUrl ? (
              <Button type="submit">
                {isPending ? (
                  <div className="size-6 border-2 border-muted-foreground/60 rounded-full border-t-secondary animate-spin"></div>
                ) : (
                  <div className="flex gap-2">
                    <Send /> Send To Patient
                  </div>
                )}
              </Button>
            ) : (
              <div className="flex flex-col gap-2 items-end">
                <Button onClick={handlePdfGenerate}>
                  {pdfUrlIsPending ? (
                    <div className="size-6 border-2 border-muted-foreground/60 rounded-full border-t-secondary animate-spin"></div>
                  ) : (
                    <div className="flex gap-2">
                      <FileText />
                      Generate PDF
                    </div>
                  )}
                </Button>

                {pdfUrlError && (
                  <p className="text-destructive">
                    something went wrong pdf is not generate
                  </p>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default DoctorPrescriptionForm;
